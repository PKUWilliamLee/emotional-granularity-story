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

init();
