const scenarios = [
  {
    emotion: "Joy",
    intensity: "Bright but ordinary",
    color: "#ffe36f",
    en: "You open your phone after a long day and see that a friend remembered a tiny thing you once said you wanted to try. They booked it for both of you.",
    zh: "忙了一整天后你打开手机，发现朋友记住了你曾经随口说想试的一件小事，并且已经帮你们两个人预约好了。"
  },
  {
    emotion: "Anger",
    intensity: "Public friction",
    color: "#ff9a86",
    en: "A classmate presents an idea almost exactly like yours, but says it came to them last night. Everyone praises them before you can speak.",
    zh: "一个同学展示了一个几乎和你一样的想法，却说这是昨晚自己想到的。你还没来得及解释，大家已经开始夸赞他。"
  },
  {
    emotion: "Sadness",
    intensity: "Quiet disappointment",
    color: "#b9def9",
    en: "You waited all week for a small celebration. At the last minute, everyone cancels for reasonable reasons, and you tell them it is totally fine.",
    zh: "你期待了一整个星期的小庆祝，在最后一刻大家都因为合理的理由取消了。你回复他们说完全没关系。"
  },
  {
    emotion: "Anxiety",
    intensity: "Deadline pressure",
    color: "#bca7ff",
    en: "You are about to submit an assignment when the file suddenly will not open. The deadline is in twelve minutes, and your group chat is silent.",
    zh: "你正准备提交作业，文件突然打不开了。距离截止时间只剩十二分钟，小组群里也没有人回复。"
  },
  {
    emotion: "Embarrassment",
    intensity: "Small social sting",
    color: "#ffc2d1",
    en: "You wave enthusiastically at someone across the hallway. They look confused, and you realize you mistook them for someone else.",
    zh: "你在走廊另一头很热情地向一个人挥手。对方一脸困惑，你才发现自己认错人了。"
  },
  {
    emotion: "Pride",
    intensity: "Private achievement",
    color: "#b9f4d3",
    en: "You finally solve a problem that kept blocking your project. No one else sees it happen, but the page runs perfectly for the first time.",
    zh: "你终于解决了一个一直卡住项目的问题。没有人看到这一刻，但页面第一次顺利跑起来了。"
  },
  {
    emotion: "Jealousy",
    intensity: "Social comparison",
    color: "#d2f889",
    en: "You scroll past photos from an event you wanted to attend. A close friend is there, laughing with people you hoped to know better.",
    zh: "你刷到一个自己很想参加的活动照片。你的好朋友在那里，正和你也想认识的人开心地聊天。"
  },
  {
    emotion: "Relief",
    intensity: "Body unclenching",
    color: "#98ead2",
    en: "You check the grade portal expecting the worst. The result is not perfect, but it is much better than the story you had been telling yourself.",
    zh: "你打开成绩页面时已经预想了最糟糕的结果。成绩并不完美，但比你这几天脑内反复想象的情况好很多。"
  },
  {
    emotion: "Nostalgia",
    intensity: "Memory trigger",
    color: "#f6c56f",
    en: "A song plays in a shop, and suddenly you remember a bus ride from years ago, a friend you rarely talk to now, and the exact color of the evening sky.",
    zh: "店里放起一首歌，你突然想起很多年前的一次公交车程，一个现在很少联系的朋友，还有那天傍晚天空的颜色。"
  },
  {
    emotion: "Loneliness",
    intensity: "Crowded room",
    color: "#bfc8ff",
    en: "You are sitting with a group after class. Everyone is talking, but every conversation seems to bend around you instead of toward you.",
    zh: "下课后你和一群人坐在一起。大家都在聊天，但每段对话似乎都绕开你，而不是朝向你。"
  },
  {
    emotion: "Gratitude",
    intensity: "Unexpected care",
    color: "#d5ffaf",
    en: "You mention being hungry only once. Ten minutes later, someone quietly places a snack beside your laptop and keeps talking as if it was nothing.",
    zh: "你只是随口说了一句有点饿。十分钟后，有人默默把一份小零食放在你的电脑旁边，然后像没发生什么一样继续聊天。"
  },
  {
    emotion: "Irritation",
    intensity: "Tiny repeated bother",
    color: "#ffbc8f",
    en: "You are trying to focus, but the person beside you keeps tapping a pen, stopping for ten seconds, then starting again.",
    zh: "你正努力集中注意力，旁边的人一直在敲笔。对方停十秒，又重新开始。"
  },
  {
    emotion: "Hope",
    intensity: "Fragile optimism",
    color: "#aee8ff",
    en: "You send a message that took courage to write. The reply does not come immediately, but the three dots appear for a moment.",
    zh: "你发出了一条鼓起勇气才写好的消息。对方没有马上回复，但输入中的三个点短暂出现了一下。"
  },
  {
    emotion: "Guilt",
    intensity: "Delayed conscience",
    color: "#ddd2bd",
    en: "You realize you forgot to reply to someone who was asking for help. Their deadline has already passed, and your unread message is still sitting there.",
    zh: "你突然意识到自己忘了回复一个向你求助的人。对方的截止时间已经过了，而那条未读消息还停在那里。"
  },
  {
    emotion: "Awe",
    intensity: "Sudden small wonder",
    color: "#c7f3ff",
    en: "You step outside after studying for hours. The rain has stopped, the streetlights are reflected on the ground, and everything looks newly made.",
    zh: "你学习了好几个小时后走到室外。雨刚停，路灯倒映在地面上，一切都像刚被重新擦亮过。"
  },
  {
    emotion: "Disappointment",
    intensity: "Expectation drop",
    color: "#d8d2ff",
    en: "You open a carefully written response from someone important, only to find two short sentences that answer the facts but miss the feeling.",
    zh: "你打开一个对你很重要的人认真回复的消息，却发现只有两句很短的话。它回答了事实，却完全没有接住你的感受。"
  }
];

const tierLexicon = {
  en: {
    tier1: ["happy", "sad", "angry", "afraid", "scared", "glad", "upset", "excited", "worried", "annoyed", "nervous", "calm", "bad", "good"],
    tier2: ["anxious", "frustrated", "lonely", "jealous", "ashamed", "grateful", "hopeful", "embarrassed", "disappointed", "proud", "bored", "confused", "irritated", "relieved", "guilty"],
    tier3: ["melancholy", "wistful", "nostalgic", "homesick", "indignant", "despondent", "exasperated", "forlorn", "apprehensive", "elated", "serene", "contented", "resentful", "tender", "uneasy"],
    tier4: ["crestfallen", "morose", "disconsolate", "jubilant", "aggrieved", "sullen", "woeful", "rapturous", "bereft", "chagrined", "doleful", "peeved", "ambivalent", "mortified", "yearning"]
  },
  zh: {
    tier1: ["开心", "难过", "生气", "害怕", "担心", "烦", "平静", "不好", "高兴", "伤心"],
    tier2: ["焦虑", "沮丧", "孤独", "嫉妒", "羞愧", "感激", "希望", "尴尬", "失望", "自豪", "困惑", "恼火", "释然", "内疚"],
    tier3: ["忧郁", "怅惘", "怀旧", "想家", "愤慨", "绝望", "恼怒", "孤寂", "忧虑", "欣喜", "宁静", "满足", "委屈", "酸涩", "忐忑"],
    tier4: ["怅然若失", "郁郁寡欢", "悲不自胜", "欣喜若狂", "愤愤不平", "闷闷不乐", "悲戚", "心潮澎湃", "怆然", "羞惭", "惆怅", "百感交集", "怦然", "怅然"]
  }
};

const flatteningWords = [
  "fine", "okay", "ok", "bad", "good", "whatever", "meh", "lol", "lmao", "idk", "mood", "cringe", "dead",
  "无语", "还行", "麻了", "破防", "emo", "烦死", "崩了", "随便", "还好", "就那样"
];

const detailSignals = [
  "because", "since", "but", "although", "while", "also", "at the same time", "underneath", "part of me",
  "因为", "但是", "可是", "同时", "一方面", "另一方面", "其实", "又", "既", "也"
];

const bodySignals = [
  "chest", "stomach", "throat", "hands", "face", "heart", "breath", "shoulders", "eyes",
  "胸口", "胃", "喉咙", "手", "脸", "心", "呼吸", "肩膀", "眼睛", "鼻子"
];

const fallbackRewrites = {
  Joy: "I felt a warm, slightly disbelieving happiness, the kind that comes from being remembered in a specific way.",
  Anger: "I felt indignant and exposed, angry not only at the copied idea but at how quickly the room accepted it.",
  Sadness: "I felt quietly crestfallen, trying to act generous while a small expectation folded in on itself.",
  Anxiety: "I felt a tight, accelerating panic, as if every silent second made the deadline feel more personal.",
  Embarrassment: "I felt mortified for a moment, then oddly tender toward my own eagerness.",
  Pride: "I felt a private, steady pride, less loud than celebration but strong enough to make me sit up straighter.",
  Jealousy: "I felt envious and left behind, ashamed that someone else's joy could make my own absence feel sharper.",
  Relief: "I felt relief moving through my body first, as if my shoulders understood the result before my mind did.",
  Nostalgia: "I felt wistful and homesick for a version of my life that was already gone but suddenly vivid.",
  Loneliness: "I felt lonely in a crowded way, present in the room but missing from its emotional center.",
  Gratitude: "I felt quietly grateful, touched by care that arrived without asking to be noticed.",
  Irritation: "I felt prickly and over-alert, annoyed less by the sound itself than by waiting for it to return.",
  Hope: "I felt cautious hope, a small brightness I did not fully trust yet could not ignore.",
  Guilt: "I felt guilty and belatedly ashamed, aware that my silence had consequences for someone else.",
  Awe: "I felt a clean, wordless awe, as if the ordinary street had briefly become more precise than my thoughts.",
  Disappointment: "I felt disappointed in a hollow way, answered on the surface but missed underneath."
};

let currentScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
let scenarioLanguage = "en";

const els = {
  scenarioCard: document.querySelector("#scenarioCard"),
  scenarioEmotion: document.querySelector("#scenarioEmotion"),
  scenarioIntensity: document.querySelector("#scenarioIntensity"),
  scenarioText: document.querySelector("#scenarioText"),
  scenarioEn: document.querySelector("#scenarioEn"),
  scenarioZh: document.querySelector("#scenarioZh"),
  shuffleScenario: document.querySelector("#shuffleScenario"),
  responseText: document.querySelector("#responseText"),
  charCount: document.querySelector("#charCount"),
  analyzeButton: document.querySelector("#analyzeButton"),
  emptyState: document.querySelector("#emptyState"),
  resultState: document.querySelector("#resultState"),
  resultPanel: document.querySelector("#resultPanel"),
  scoreValue: document.querySelector("#scoreValue"),
  scoreBand: document.querySelector("#scoreBand"),
  scoreSummary: document.querySelector("#scoreSummary"),
  emotionChips: document.querySelector("#emotionChips"),
  signalList: document.querySelector("#signalList"),
  flatList: document.querySelector("#flatList"),
  rewriteText: document.querySelector("#rewriteText"),
  analysisSource: document.querySelector("#analysisSource"),
  dataStoryNav: document.querySelector("#dataStoryNav"),
  postGameSections: document.querySelectorAll(".post-game-section")
};

function init() {
  renderScenario();
  renderDataStory();
  els.shuffleScenario.addEventListener("click", shuffleScenario);
  els.scenarioEn.addEventListener("click", () => setScenarioLanguage("en"));
  els.scenarioZh.addEventListener("click", () => setScenarioLanguage("zh"));
  els.responseText.addEventListener("input", updateCharCount);
  els.analyzeButton.addEventListener("click", analyzeResponse);
  updateCharCount();

  window.addEventListener("load", () => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
}

function renderScenario() {
  els.scenarioCard.style.setProperty("--scenario-color", currentScenario.color);
  els.scenarioEmotion.textContent = currentScenario.emotion;
  els.scenarioIntensity.textContent = currentScenario.intensity;
  els.scenarioText.textContent = currentScenario[scenarioLanguage];
  els.scenarioEn.classList.toggle("active", scenarioLanguage === "en");
  els.scenarioZh.classList.toggle("active", scenarioLanguage === "zh");
}

function setScenarioLanguage(language) {
  scenarioLanguage = language;
  renderScenario();
}

function shuffleScenario() {
  let next = currentScenario;
  while (next === currentScenario) {
    next = scenarios[Math.floor(Math.random() * scenarios.length)];
  }
  currentScenario = next;
  renderScenario();
}

function updateCharCount() {
  els.charCount.textContent = `${els.responseText.value.length} / 1400`;
}

async function analyzeResponse() {
  const text = els.responseText.value.trim();
  if (!text) {
    els.responseText.focus();
    return;
  }

  setLoading(true);
  const localResult = analyzeLocally(text, currentScenario);

  try {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 16000);
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        scenario: currentScenario.en,
        scenarioZh: currentScenario.zh,
        scenarioEmotion: currentScenario.emotion
      }),
      signal: controller.signal
    });
    window.clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Analysis endpoint returned ${response.status}`);
    }

    const data = await response.json();
    renderResult(normalizeResult(data.analysis || data, localResult), data.configured === false ? "Rule-based preview" : "LLM analysis");
  } catch (error) {
    renderResult(localResult, "Rule-based fallback");
  } finally {
    setLoading(false);
  }
}

function setLoading(isLoading) {
  els.analyzeButton.disabled = isLoading;
  els.analyzeButton.innerHTML = isLoading
    ? '<i data-lucide="loader-circle" aria-hidden="true"></i> Reading the palette'
    : '<i data-lucide="scan-text" aria-hidden="true"></i> Analyze granularity';
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function normalizeResult(data, fallback) {
  return {
    score: clamp(Number(data.score ?? fallback.score), 0, 100),
    band: data.band || fallback.band,
    summary: data.summary || data.explanation || fallback.summary,
    detectedEmotions: coerceArray(data.detectedEmotions || data.detected_emotions, fallback.detectedEmotions),
    granularSignals: coerceArray(data.granularSignals || data.granularity_signals, fallback.granularSignals),
    flatteningSignals: coerceArray(data.flatteningSignals || data.flattened_signals, fallback.flatteningSignals),
    rewrite: data.rewrite || data.suggested_rewrite || fallback.rewrite
  };
}

function coerceArray(value, fallback) {
  if (Array.isArray(value) && value.length) {
    return value.slice(0, 5).map(String);
  }
  return fallback;
}

function renderResult(result, source) {
  els.emptyState.classList.add("hidden");
  els.resultState.classList.remove("hidden");
  revealPostGameSections();
  els.resultPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });

  els.analysisSource.textContent = source;
  els.resultState.querySelector(".score-ring").style.setProperty("--score", result.score);
  animateScore(result.score);
  els.scoreBand.textContent = result.band;
  els.scoreSummary.textContent = result.summary;
  els.rewriteText.textContent = result.rewrite;

  fillList(els.emotionChips, result.detectedEmotions, "span");
  fillList(els.signalList, result.granularSignals, "li");
  fillList(els.flatList, result.flatteningSignals, "li");
}

function revealPostGameSections() {
  els.postGameSections.forEach((section) => section.classList.remove("hidden"));

  if (els.dataStoryNav) {
    els.dataStoryNav.href = "#handoff";
    els.dataStoryNav.classList.remove("locked-link");
    els.dataStoryNav.removeAttribute("aria-disabled");
  }
}

function animateScore(target) {
  const start = Number(els.scoreValue.textContent) || 0;
  const duration = 650;
  const started = performance.now();

  function tick(now) {
    const progress = clamp((now - started) / duration, 0, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    els.scoreValue.textContent = Math.round(start + (target - start) * eased);
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }
  requestAnimationFrame(tick);
}

function fillList(container, items, tagName) {
  container.innerHTML = "";
  items.slice(0, 5).forEach((item) => {
    const element = document.createElement(tagName);
    element.textContent = item;
    container.appendChild(element);
  });
}

function analyzeLocally(text, scenario) {
  const lower = text.toLowerCase();
  const matches = {
    tier1: findMatches(lower, text, tierLexicon.en.tier1, tierLexicon.zh.tier1),
    tier2: findMatches(lower, text, tierLexicon.en.tier2, tierLexicon.zh.tier2),
    tier3: findMatches(lower, text, tierLexicon.en.tier3, tierLexicon.zh.tier3),
    tier4: findMatches(lower, text, tierLexicon.en.tier4, tierLexicon.zh.tier4)
  };
  const flattening = findMatches(lower, text, flatteningWords, []);
  const details = findMatches(lower, text, detailSignals, []);
  const body = findMatches(lower, text, bodySignals, []);
  const uniqueEmotionWords = [...new Set([...matches.tier1, ...matches.tier2, ...matches.tier3, ...matches.tier4])];
  const wordLikeCount = countWordLikeUnits(text);
  const sentenceCount = Math.max(1, (text.match(/[.!?。！？]/g) || []).length);

  let score = 28;
  score += Math.min(matches.tier1.length * 3, 12);
  score += Math.min(matches.tier2.length * 7, 24);
  score += Math.min(matches.tier3.length * 10, 26);
  score += Math.min(matches.tier4.length * 13, 28);
  score += Math.min(uniqueEmotionWords.length * 3, 15);
  score += Math.min(details.length * 5, 14);
  score += Math.min(body.length * 4, 10);
  score += Math.min(Math.max(wordLikeCount - 18, 0) * 0.45, 12);
  score += sentenceCount > 1 ? 4 : 0;
  score -= Math.min(flattening.length * 5, 18);

  score = Math.round(clamp(score, 18, 96));
  const band = score >= 78 ? "High-resolution palette" : score >= 58 ? "Emerging granularity" : score >= 38 ? "Soft-focus feeling" : "Muted palette";

  const granularSignals = [];
  if (matches.tier3.length || matches.tier4.length) granularSignals.push("Uses rarer emotion words: " + [...matches.tier3, ...matches.tier4].slice(0, 4).join(", "));
  if (matches.tier2.length) granularSignals.push("Names mid-level feelings: " + matches.tier2.slice(0, 4).join(", "));
  if (details.length) granularSignals.push("Explains cause, contrast, or mixed emotion.");
  if (body.length) granularSignals.push("Connects emotion to bodily sensation.");
  if (!granularSignals.length) granularSignals.push("The response begins to locate a feeling, but stays broad.");

  const flatteningSignals = [];
  if (flattening.length) flatteningSignals.push("Relies on broad or compressed words: " + flattening.slice(0, 4).join(", "));
  if (wordLikeCount < 18) flatteningSignals.push("Very short responses leave little room for emotional texture.");
  if (uniqueEmotionWords.length < 2) flatteningSignals.push("Few distinct emotion labels are named.");
  if (!details.length) flatteningSignals.push("Cause and inner conflict are mostly implicit.");
  if (!flatteningSignals.length) flatteningSignals.push("No major flattening signals; the response avoids very compressed wording.");

  const detected = uniqueEmotionWords.length ? uniqueEmotionWords.slice(0, 5) : [scenario.emotion.toLowerCase()];

  return {
    score,
    band,
    summary: `Your response shows ${score >= 58 ? "some emotional detail" : "a fairly broad emotional outline"}. The strongest signal is ${granularSignals[0].toLowerCase()}`,
    detectedEmotions: detected,
    granularSignals: granularSignals.slice(0, 4),
    flatteningSignals: flatteningSignals.slice(0, 4),
    rewrite: fallbackRewrites[scenario.emotion] || "I felt several things at once, and naming the exact mixture made the moment sharper."
  };
}

function findMatches(lowerText, originalText, englishWords, chineseWords) {
  const found = [];
  englishWords.forEach((word) => {
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`\\b${escaped}\\b`, "i");
    if (regex.test(lowerText)) found.push(word);
  });
  chineseWords.forEach((word) => {
    if (originalText.includes(word)) found.push(word);
  });
  return [...new Set(found)];
}

function countWordLikeUnits(text) {
  const englishWords = text.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g) || [];
  const cjkChars = text.match(/[\u4e00-\u9fff]/g) || [];
  return englishWords.length + Math.ceil(cjkChars.length / 2);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

const dataFiles = {
  wordMap: "assets/data/vocabulary/word_map.json",
  entropy: "assets/data/books/entropy_nrc_plot.json",
  trends: "assets/data/books/word_trends_hybrid.csv",
  redditFunnel: "assets/data/reddit/coverage_funnel.json",
  redditTier: "assets/data/reddit/tier_usage.json",
  redditSummary: "assets/data/reddit/validation_summary.json",
  concentration: "assets/data/ai-human/fig_1_concentration.csv",
  tierComposition: "assets/data/ai-human/fig_6_tier_composition.csv",
  signatureWords: "assets/data/ai-human/fig_4_signature_words.csv",
  nrcComposition: "assets/data/ai-human/fig_5_nrc_composition.csv"
};

async function renderDataStory() {
  try {
    const [
      wordMap,
      entropy,
      trends,
      redditFunnel,
      redditTier,
      redditSummary,
      concentration,
      tierComposition,
      signatureWords,
      nrcComposition
    ] = await Promise.all([
      loadJson(dataFiles.wordMap),
      loadJson(dataFiles.entropy),
      loadCsv(dataFiles.trends),
      loadJson(dataFiles.redditFunnel),
      loadJson(dataFiles.redditTier),
      loadJson(dataFiles.redditSummary),
      loadCsv(dataFiles.concentration),
      loadCsv(dataFiles.tierComposition),
      loadCsv(dataFiles.signatureWords),
      loadCsv(dataFiles.nrcComposition)
    ]);

    renderWordMap(wordMap);
    renderEntropyChart(entropy);
    renderWordTrendChart(trends);
    renderRedditFunnel(redditFunnel, redditSummary);
    renderRedditTierChart(redditTier);
    renderConcentrationChart(concentration);
    renderTierCompositionChart(tierComposition);
    renderSignatureWordsChart(signatureWords);
    renderNrcChart(nrcComposition);
  } catch (error) {
    document.querySelectorAll(".chart-frame > div:last-child").forEach((chart) => {
      if (!chart.children.length) {
        chart.innerHTML = '<p class="chart-error">Local data could not be loaded. Open this site through http://localhost:3000 instead of opening index.html directly, then refresh.</p>';
      }
    });
  }
}

async function loadJson(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Could not load ${path}`);
  return response.json();
}

async function loadCsv(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Could not load ${path}`);
  return parseCsv(await response.text());
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell);
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }

  const headers = rows.shift() || [];
  return rows.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

function renderWordMap(words) {
  const container = document.querySelector("#wordMapChart");
  if (!container) return;
  container.innerHTML = "";

  const data = words.filter((word) => word.word && Number.isFinite(Number(word.x)) && Number.isFinite(Number(word.y)));
  const width = 1200;
  const height = 760;
  const padding = 64;
  const xs = data.map((word) => Number(word.x));
  const ys = data.map((word) => Number(word.y));
  const changes = data.map((word) => Number(word.pct_change)).filter(Number.isFinite);
  const bounds = {
    minX: Math.min(...xs),
    maxX: Math.max(...xs),
    minY: Math.min(...ys),
    maxY: Math.max(...ys)
  };
  const negative = changes.filter((value) => value < 0).sort((a, b) => a - b);
  const positive = changes.filter((value) => value >= 0).sort((a, b) => a - b);
  const low = quantile(negative, 0.05) ?? -1;
  const high = quantile(positive, 0.95) ?? 1;

  const svg = createSvg("svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", `Zoomable semantic map of ${data.length} emotion words`);

  const layer = createSvg("g");
  const axisX = createSvg("line");
  axisX.setAttribute("class", "map-axis");
  axisX.setAttribute("x1", "0");
  axisX.setAttribute("x2", String(width));
  axisX.setAttribute("y1", String(height / 2));
  axisX.setAttribute("y2", String(height / 2));
  const axisY = createSvg("line");
  axisY.setAttribute("class", "map-axis");
  axisY.setAttribute("x1", String(width / 2));
  axisY.setAttribute("x2", String(width / 2));
  axisY.setAttribute("y1", "0");
  axisY.setAttribute("y2", String(height));
  layer.append(axisX, axisY);

  const tooltip = document.createElement("div");
  tooltip.className = "word-map-tooltip";
  container.append(svg, tooltip);

  const nodes = data.map((word) => {
    const tier = getTier(word);
    const node = createSvg("text");
    const x = scale(Number(word.x), bounds.minX, bounds.maxX, padding, width - padding);
    const y = scale(Number(word.y), bounds.minY, bounds.maxY, height - padding, padding);
    const change = Number(word.pct_change);
    node.classList.add("map-word");
    node.dataset.word = word.word.toLowerCase();
    node.dataset.tier = String(tier);
    node.setAttribute("x", x.toFixed(2));
    node.setAttribute("y", y.toFixed(2));
    node.setAttribute("font-size", String(tier === 3 ? 13 : tier === 2 ? 12 : 11));
    node.setAttribute("fill", trendColor(change, low, high));
    node.textContent = word.word;
    node.addEventListener("pointerenter", (event) => showWordTooltip(event, tooltip, word, tier, change));
    node.addEventListener("pointermove", (event) => positionWordTooltip(event, tooltip));
    node.addEventListener("pointerleave", () => tooltip.classList.remove("visible"));
    layer.appendChild(node);
    return { node, word, x, y };
  });

  svg.appendChild(layer);

  const state = { scale: 1, x: 0, y: 0, dragging: false, startX: 0, startY: 0, originX: 0, originY: 0 };
  const applyTransform = () => {
    layer.setAttribute("transform", `translate(${state.x} ${state.y}) scale(${state.scale})`);
  };
  const zoomAt = (factor, centerX = container.clientWidth / 2, centerY = container.clientHeight / 2) => {
    const nextScale = clamp(state.scale * factor, 0.55, 8);
    const ratio = nextScale / state.scale;
    state.x = centerX - (centerX - state.x) * ratio;
    state.y = centerY - (centerY - state.y) * ratio;
    state.scale = nextScale;
    applyTransform();
  };

  container.addEventListener("wheel", (event) => {
    event.preventDefault();
    const rect = container.getBoundingClientRect();
    zoomAt(event.deltaY < 0 ? 1.16 : 0.86, event.clientX - rect.left, event.clientY - rect.top);
  }, { passive: false });

  container.addEventListener("pointerdown", (event) => {
    state.dragging = true;
    state.startX = event.clientX;
    state.startY = event.clientY;
    state.originX = state.x;
    state.originY = state.y;
    container.setPointerCapture(event.pointerId);
  });

  container.addEventListener("pointermove", (event) => {
    if (!state.dragging) return;
    state.x = state.originX + event.clientX - state.startX;
    state.y = state.originY + event.clientY - state.startY;
    applyTransform();
  });

  container.addEventListener("pointerup", (event) => {
    state.dragging = false;
    if (container.hasPointerCapture(event.pointerId)) container.releasePointerCapture(event.pointerId);
  });

  container.addEventListener("pointercancel", () => {
    state.dragging = false;
  });

  const resetMap = () => {
    state.scale = 1;
    state.x = 0;
    state.y = 0;
    applyTransform();
  };

  document.querySelector("#wordMapZoomIn")?.addEventListener("click", () => zoomAt(1.28));
  document.querySelector("#wordMapZoomOut")?.addEventListener("click", () => zoomAt(0.78));
  document.querySelector("#wordMapReset")?.addEventListener("click", resetMap);

  const search = document.querySelector("#wordMapSearch");
  search?.addEventListener("input", () => {
    const query = search.value.trim().toLowerCase();
    let match = null;
    nodes.forEach((item) => {
      const isMatch = Boolean(query && item.word.word.toLowerCase().includes(query));
      item.node.classList.toggle("is-highlighted", isMatch);
      item.node.classList.toggle("is-dimmed", Boolean(query && !isMatch));
      if (!match && isMatch) match = item;
    });

    if (match) {
      state.scale = Math.max(state.scale, 2.5);
      state.x = container.clientWidth / 2 - match.x * state.scale;
      state.y = container.clientHeight / 2 - match.y * state.scale;
      applyTransform();
    } else if (!query) {
      nodes.forEach((item) => item.node.classList.remove("is-dimmed", "is-highlighted"));
    }
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function getTier(word) {
  const tierLabel = Array.isArray(word.emotions) ? word.emotions.find((label) => /^Tier/.test(label)) : "";
  const tier = Number((tierLabel || "").replace(/\D/g, ""));
  return tier || 1;
}

function createSvg(tagName) {
  return document.createElementNS("http://www.w3.org/2000/svg", tagName);
}

function trendColor(value, low, high) {
  if (!Number.isFinite(value)) return "#8a8578";
  if (value < 0) {
    const amount = clamp(Math.abs(value / low), 0, 1);
    return mixHex("#d8d3c6", "#b33b32", amount);
  }
  const amount = clamp(value / high, 0, 1);
  return mixHex("#d8d3c6", "#2d8f69", amount);
}

function mixHex(from, to, amount) {
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  const rgb = a.map((channel, index) => Math.round(channel + (b[index] - channel) * amount));
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  return [0, 2, 4].map((start) => parseInt(clean.slice(start, start + 2), 16));
}

function quantile(values, q) {
  if (!values.length) return null;
  const position = (values.length - 1) * q;
  const base = Math.floor(position);
  const rest = position - base;
  return values[base + 1] === undefined ? values[base] : values[base] + rest * (values[base + 1] - values[base]);
}

function showWordTooltip(event, tooltip, word, tier, change) {
  const emotions = Array.isArray(word.emotions) ? word.emotions.filter((label) => !/^Tier/.test(label)).join(", ") : "";
  tooltip.innerHTML = `<strong>${escapeHtml(word.word)}</strong>Tier ${tier}${emotions ? ` · ${escapeHtml(emotions)}` : ""}<br>Trend: ${formatSigned(change)}%`;
  tooltip.classList.add("visible");
  positionWordTooltip(event, tooltip);
}

function positionWordTooltip(event, tooltip) {
  const rect = tooltip.parentElement.getBoundingClientRect();
  tooltip.style.left = `${event.clientX - rect.left}px`;
  tooltip.style.top = `${event.clientY - rect.top}px`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderEntropyChart(rows) {
  const container = document.querySelector("#entropyChart");
  if (!container) return;
  container.innerHTML = "";
  const grouped = groupBy(rows, "emotion");
  const emotionOrder = ["joy", "trust", "disgust", "sadness", "anger", "fear", "anticipation", "surprise"];

  emotionOrder.forEach((emotion) => {
    const points = (grouped[emotion] || []).sort((a, b) => Number(a.decade) - Number(b.decade));
    if (!points.length) return;
    const row = document.createElement("div");
    row.className = "spark-row";

    const label = document.createElement("span");
    label.className = "spark-name";
    label.textContent = emotion;

    const track = document.createElement("div");
    track.className = "spark-track";
    const line = document.createElement("div");
    line.className = "spark-line";
    line.appendChild(createSparkline(points.map((point) => Number(point.index)), 88, 106));
    track.appendChild(line);

    const value = document.createElement("span");
    value.className = "spark-value";
    const change = Number(points.at(-1).index) - Number(points[0].index);
    value.textContent = `${formatSigned(change)} pts`;

    row.append(label, track, value);
    container.appendChild(row);
  });
}

function createSparkline(values, min, max) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 30");
  svg.setAttribute("preserveAspectRatio", "none");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const d = values.map((value, index) => {
    const x = scale(index, 0, values.length - 1, 4, 96);
    const y = scale(value, min, max, 25, 5);
    return `${index ? "L" : "M"} ${x.toFixed(2)} ${y.toFixed(2)}`;
  }).join(" ");
  path.setAttribute("d", d);
  svg.appendChild(path);
  return svg;
}

function renderWordTrendChart(rows) {
  const container = document.querySelector("#wordTrendChart");
  if (!container) return;
  container.innerHTML = "";
  const parsed = rows.map((row) => ({ word: row.Phrase, pct: Number(row.pct_change) })).filter((row) => Number.isFinite(row.pct));
  const rising = parsed.sort((a, b) => b.pct - a.pct).slice(0, 6);
  const falling = [...parsed].sort((a, b) => a.pct - b.pct).slice(0, 6);

  container.appendChild(createTrendLane("Rising words", rising, "rising"));
  container.appendChild(createTrendLane("Falling words", falling, "falling"));
}

function createTrendLane(title, words, className) {
  const lane = document.createElement("div");
  lane.className = `trend-lane ${className}`;
  const heading = document.createElement("h4");
  heading.textContent = title;
  lane.appendChild(heading);
  words.forEach((word) => {
    const chip = document.createElement("div");
    chip.className = "trend-chip";
    const label = document.createElement("span");
    label.textContent = word.word;
    const value = document.createElement("span");
    value.textContent = `${formatSigned(word.pct)}%`;
    chip.append(label, value);
    lane.appendChild(chip);
  });
  return lane;
}

function renderRedditFunnel(funnel, summary) {
  const container = document.querySelector("#redditFunnelChart");
  if (!container) return;
  container.innerHTML = "";
  const total = Number(summary.n_emotional) || Number(funnel[0]?.count) || 1;
  const rows = [
    { label: "Emotional comments", count: total, color: "var(--sky)" },
    { label: "With dictionary word", count: Number(funnel[1]?.count) || 0, color: "var(--mint)" },
    { label: "No dictionary word", count: total - (Number(funnel[1]?.count) || 0), color: "var(--violet)" }
  ];

  rows.forEach((row) => {
    container.appendChild(createHorizontalBar("funnel", row.label, row.count, total, row.color, `${formatNumber(row.count)} comments`));
  });
}

function renderRedditTierChart(rows) {
  const container = document.querySelector("#redditTierChart");
  if (!container) return;
  container.innerHTML = "";
  rows.forEach((row) => {
    container.appendChild(createHorizontalBar("bar", `Tier ${row.tier}`, Number(row.share_pct), 100, tierColor(Number(row.tier)), `${Number(row.share_pct).toFixed(2)}%`));
  });
}

function renderConcentrationChart(rows) {
  const container = document.querySelector("#concentrationChart");
  if (!container) return;
  container.innerHTML = "";
  rows.forEach((row) => {
    const side = row.side || row[""];
    const card = document.createElement("article");
    card.className = "comparison-card";
    const title = document.createElement("h4");
    title.textContent = side;
    const number = document.createElement("div");
    number.className = "comparison-number";
    number.textContent = Number(row.distinct_types).toFixed(0);
    const copy = document.createElement("p");
    copy.textContent = `${percent(row.top10_share)} of tokens come from the top 10 words; Gini = ${Number(row.gini).toFixed(2)}.`;
    card.append(title, number, copy);
    container.appendChild(card);
  });
}

function renderTierCompositionChart(rows) {
  const container = document.querySelector("#tierCompositionChart");
  if (!container) return;
  container.innerHTML = "";
  const sides = ["human", "ai"];
  sides.forEach((side) => {
    const row = document.createElement("div");
    row.className = "stack-row";
    const label = document.createElement("span");
    label.className = "stack-label";
    label.textContent = side;
    const track = document.createElement("div");
    track.className = "stack-track";

    rows.forEach((item) => {
      const share = Number(item[`${side}_share`]);
      const segment = document.createElement("span");
      segment.className = "stack-segment";
      segment.style.setProperty("--w", `${share * 100}%`);
      segment.style.setProperty("--fill", tierColor(Number(item.tier)));
      segment.textContent = `${Math.round(share * 100)}%`;
      segment.title = `Tier ${item.tier}: ${percent(share)}`;
      track.appendChild(segment);
    });

    row.append(label, track);
    container.appendChild(row);
  });
}

function renderSignatureWordsChart(rows) {
  const container = document.querySelector("#signatureWordsChart");
  if (!container) return;
  container.innerHTML = "";
  const parsed = rows
    .filter((row) => row.in_figure === "True")
    .map((row) => ({ word: row.word, bias: Number(row.log2_ai_over_human), tier: Number(row.tier) }))
    .filter((row) => Number.isFinite(row.bias));
  const human = parsed.filter((row) => row.bias < 0).sort((a, b) => a.bias - b.bias).slice(0, 8);
  const ai = parsed.filter((row) => row.bias > 0).sort((a, b) => b.bias - a.bias).slice(0, 8);

  container.appendChild(createSignatureSide("More human", human, "var(--sky)"));
  container.appendChild(createSignatureSide("More AI", ai, "var(--lemon)"));
}

function createSignatureSide(title, words, color) {
  const side = document.createElement("div");
  side.className = "signature-side";
  const heading = document.createElement("h4");
  heading.textContent = title;
  side.appendChild(heading);
  const max = Math.max(...words.map((word) => Math.abs(word.bias)), 1);

  words.forEach((word) => {
    const row = document.createElement("div");
    row.className = "word-bias";
    const label = document.createElement("span");
    label.textContent = word.word;
    const track = document.createElement("div");
    track.className = "bias-track";
    const fill = document.createElement("div");
    fill.className = "bias-fill";
    fill.style.setProperty("--w", `${scale(Math.abs(word.bias), 0, max, 12, 100)}%`);
    fill.style.setProperty("--fill", color);
    track.appendChild(fill);
    const value = document.createElement("span");
    value.textContent = word.bias.toFixed(1);
    row.append(label, track, value);
    side.appendChild(row);
  });

  return side;
}

function renderNrcChart(rows) {
  const container = document.querySelector("#nrcChart");
  if (!container) return;
  container.innerHTML = "";
  rows.forEach((row) => {
    const wrapper = document.createElement("div");
    wrapper.className = "nrc-row";
    const name = document.createElement("span");
    name.className = "nrc-name";
    name.textContent = row.nrc_category;
    const pair = document.createElement("div");
    pair.className = "nrc-pair";
    pair.appendChild(createMiniTrack(Number(row.human_share), "Human", "var(--sky)"));
    pair.appendChild(createMiniTrack(Number(row.ai_share), "AI", "var(--coral)"));
    wrapper.append(name, pair);
    container.appendChild(wrapper);
  });
}

function createMiniTrack(share, label, color) {
  const track = document.createElement("div");
  track.className = "nrc-track";
  track.title = `${label}: ${percent(share)}`;
  const fill = document.createElement("div");
  fill.className = "nrc-fill";
  fill.style.setProperty("--w", `${share * 100}%`);
  fill.style.setProperty("--fill", color);
  track.appendChild(fill);
  return track;
}

function createHorizontalBar(type, labelText, value, max, color, valueText) {
  const row = document.createElement("div");
  row.className = `${type}-step`;
  const label = document.createElement("span");
  label.className = `${type === "funnel" ? "funnel" : "bar"}-label`;
  label.textContent = labelText;
  const track = document.createElement("div");
  track.className = `${type === "funnel" ? "funnel" : "bar"}-track`;
  const fill = document.createElement("div");
  fill.className = `${type === "funnel" ? "funnel" : "bar"}-fill`;
  fill.style.setProperty("--w", `${scale(value, 0, max, 0, 100)}%`);
  fill.style.setProperty("--fill", color);
  track.appendChild(fill);
  const text = document.createElement("span");
  text.className = `${type === "funnel" ? "funnel" : "bar"}-value`;
  text.textContent = valueText;
  row.append(label, track, text);
  return row;
}

function groupBy(rows, key) {
  return rows.reduce((groups, row) => {
    const value = row[key];
    groups[value] = groups[value] || [];
    groups[value].push(row);
    return groups;
  }, {});
}

function scale(value, inputMin, inputMax, outputMin, outputMax) {
  if (inputMax === inputMin) return (outputMin + outputMax) / 2;
  return outputMin + ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin);
}

function tierColor(tier) {
  if (tier === 0) return "var(--violet)";
  if (tier === 1) return "var(--lemon)";
  if (tier === 2) return "var(--sky)";
  return "var(--coral)";
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}

function formatSigned(value) {
  const rounded = Math.abs(value) >= 100 ? Math.round(value) : Number(value).toFixed(1);
  return `${value >= 0 ? "+" : "-"}${String(rounded).replace("-", "")}`;
}

function percent(value) {
  return `${(Number(value) * 100).toFixed(1)}%`;
}

init();
