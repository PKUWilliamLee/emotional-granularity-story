const DEEPSEEK_ENDPOINT = "https://api.deepseek.com/chat/completions";

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const text = String(body.text || "").trim().slice(0, 1400);
  const scenario = String(body.scenario || "").slice(0, 600);
  const scenarioZh = String(body.scenarioZh || "").slice(0, 600);
  const scenarioEmotion = String(body.scenarioEmotion || "the target feeling").slice(0, 80);

  if (!text) {
    return res.status(400).json({ error: "Missing text" });
  }

  if (!process.env.DEEPSEEK_API_KEY) {
    return res.status(200).json({
      configured: false,
      analysis: localFallback(text, scenarioEmotion)
    });
  }

  try {
    const response = await fetch(DEEPSEEK_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        temperature: 0.25,
        max_tokens: 780,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content:
              "You are an expert evaluator for a classroom data storytelling demo about emotional granularity. Analyze how precisely a user names their inner feeling. Return JSON only. Be supportive, concise, and concrete. Do not diagnose mental health. The UI is English, but the user may write in English or Chinese."
          },
          {
            role: "user",
            content: JSON.stringify({
              task:
                "Score the emotional granularity of the user's response to the scenario. Reward specific emotion labels, mixed emotions, bodily sensation, causal detail, tension, and precise imagery. Penalize vague compressed expressions such as just 'bad', 'fine', 'annoyed', 'emo', 'whatever', '无语', '麻了' when they are not developed.",
              outputSchema: {
                score: "integer 0-100",
                band: "one of: Muted palette, Soft-focus feeling, Emerging granularity, High-resolution palette",
                summary: "2 sentences max, English",
                detectedEmotions: "array of 3-6 short emotion labels, can include Chinese if user wrote Chinese",
                granularSignals: "array of 2-4 concrete signals",
                flatteningSignals: "array of 2-4 concrete signals",
                rewrite: "one more emotionally granular version of the user's feeling, same language as the user when possible, 1 sentence"
              },
              scenario,
              scenarioZh,
              scenarioEmotion,
              userResponse: text
            })
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(200).json({
        configured: true,
        providerError: response.status,
        providerMessage: errorText.slice(0, 280),
        analysis: localFallback(text, scenarioEmotion)
      });
    }

    const completion = await response.json();
    const content = completion.choices?.[0]?.message?.content || "{}";
    const analysis = normalizeAnalysis(JSON.parse(content), text, scenarioEmotion);
    return res.status(200).json({ configured: true, analysis });
  } catch (error) {
    return res.status(200).json({
      configured: true,
      providerError: "fallback",
      providerMessage: String(error.message || error).slice(0, 240),
      analysis: localFallback(text, scenarioEmotion)
    });
  }
};

function normalizeAnalysis(input, text, scenarioEmotion) {
  const fallback = localFallback(text, scenarioEmotion);
  return {
    score: clamp(Number(input.score ?? fallback.score), 0, 100),
    band: String(input.band || fallback.band),
    summary: String(input.summary || fallback.summary).slice(0, 420),
    detectedEmotions: asList(input.detectedEmotions, fallback.detectedEmotions),
    granularSignals: asList(input.granularSignals, fallback.granularSignals),
    flatteningSignals: asList(input.flatteningSignals, fallback.flatteningSignals),
    rewrite: String(input.rewrite || fallback.rewrite).slice(0, 360)
  };
}

function asList(value, fallback) {
  if (!Array.isArray(value) || value.length === 0) return fallback;
  return value.slice(0, 6).map((item) => String(item).slice(0, 120));
}

function localFallback(text, scenarioEmotion) {
  const lower = text.toLowerCase();
  const preciseEnglish = [
    "anxious", "frustrated", "lonely", "ashamed", "grateful", "embarrassed", "disappointed",
    "melancholy", "nostalgic", "homesick", "indignant", "apprehensive", "relieved", "guilty",
    "crestfallen", "morose", "jubilant", "aggrieved", "chagrined", "ambivalent", "mortified"
  ];
  const preciseChinese = [
    "焦虑", "沮丧", "孤独", "羞愧", "感激", "尴尬", "失望", "忧郁", "怀旧", "想家",
    "愤慨", "忐忑", "释然", "内疚", "怅然若失", "郁郁寡欢", "欣喜若狂", "百感交集"
  ];
  const vague = ["bad", "good", "fine", "okay", "meh", "whatever", "emo", "无语", "麻了", "崩了", "还行"];
  const details = ["because", "but", "although", "while", "at the same time", "因为", "但是", "同时", "其实", "一方面"];
  const body = ["chest", "stomach", "throat", "hands", "face", "breath", "胸口", "胃", "喉咙", "手", "脸", "呼吸"];

  const preciseMatches = [
    ...matchEnglish(lower, preciseEnglish),
    ...preciseChinese.filter((word) => text.includes(word))
  ];
  const vagueMatches = [
    ...matchEnglish(lower, vague),
    ...vague.filter((word) => /[\u4e00-\u9fff]/.test(word) && text.includes(word))
  ];
  const detailMatches = [
    ...matchEnglish(lower, details),
    ...details.filter((word) => /[\u4e00-\u9fff]/.test(word) && text.includes(word))
  ];
  const bodyMatches = [
    ...matchEnglish(lower, body),
    ...body.filter((word) => /[\u4e00-\u9fff]/.test(word) && text.includes(word))
  ];

  const unitCount = countUnits(text);
  let score = 34 + Math.min(preciseMatches.length * 12, 34) + Math.min(detailMatches.length * 6, 16) + Math.min(bodyMatches.length * 5, 12);
  score += Math.min(Math.max(unitCount - 18, 0) * 0.5, 12);
  score -= Math.min(vagueMatches.length * 6, 18);
  score = Math.round(clamp(score, 18, 92));

  return {
    score,
    band: score >= 78 ? "High-resolution palette" : score >= 58 ? "Emerging granularity" : score >= 38 ? "Soft-focus feeling" : "Muted palette",
    summary:
      "This preview finds some emotional texture, but it is using the rule-based backup rather than the live LLM. Add specific feelings, causes, bodily cues, or mixed emotions to raise the resolution.",
    detectedEmotions: preciseMatches.length ? [...new Set(preciseMatches)].slice(0, 5) : [String(scenarioEmotion).toLowerCase()],
    granularSignals: [
      preciseMatches.length ? `Specific feeling words: ${[...new Set(preciseMatches)].slice(0, 4).join(", ")}` : "Few precise feeling words were detected.",
      detailMatches.length ? "The response includes cause, contrast, or inner tension." : "Cause and inner conflict are mostly implicit.",
      bodyMatches.length ? "The response links emotion to bodily sensation." : "Bodily sensation is not yet named."
    ],
    flatteningSignals: [
      vagueMatches.length ? `Compressed words appear: ${[...new Set(vagueMatches)].slice(0, 4).join(", ")}` : "No obvious internet-slang compression was detected.",
      unitCount < 18 ? "The response is short, leaving little room for nuance." : "The response gives enough length for some nuance."
    ],
    rewrite:
      "I felt more than one thing at once: a precise mixture of the situation's surface emotion and the quieter feeling underneath it."
  };
}

function matchEnglish(text, words) {
  return words.filter((word) => new RegExp(`\\b${escapeRegExp(word)}\\b`, "i").test(text));
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function countUnits(text) {
  const englishWords = text.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g) || [];
  const cjkChars = text.match(/[\u4e00-\u9fff]/g) || [];
  return englishWords.length + Math.ceil(cjkChars.length / 2);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
