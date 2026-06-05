# Emotional Granularity Story

An interactive opening game for a Data Storytelling project about the atrophy of emotional granularity.

## What it does

- Randomly assigns the audience an everyday emotional scenario.
- Lets the audience view the scenario in English or Chinese.
- Accepts English or Chinese inner descriptions.
- Calls `/api/analyze` to evaluate emotional granularity with DeepSeek.
- Falls back to a rule-based preview when the API key is not configured or the provider is unavailable.
- Provides a handoff section where teammates can merge the later data visualization chapters.

## Vercel setup

Add this environment variable in Vercel:

```text
DEEPSEEK_API_KEY=your_deepseek_key_here
```

Then import the GitHub repository into Vercel. The frontend calls `/api/analyze`, and the serverless function reads the key from Vercel's environment variables.

## Local development

Install dependencies and run Vercel locally:

```bash
npm install
npm run start
```

If the API key is not configured locally, the page still works through the rule-based fallback.

## Project structure

```text
index.html
style.css
script.js
api/analyze.js
assets/openmoji/
```

## Asset credits

OpenMoji graphics are used under CC BY-SA 4.0. Fonts are loaded from Google Fonts. Interface icons are loaded from Lucide.
