---
title: "Praxis: Vibe Coding mit Gemini & Copilot"
kategorie: "PraxisProjekte"
level: 2
---
# Projekt: Dein KI-Assistent

In diesem Projekt baust du eine App, ohne selbst jede Zeile Code zu schreiben. Du steuerst die Entwicklung über "Vibes" (natürliche Sprache) und lässt die KI (Gemini/Copilot) die Umsetzung machen.

### Die Aufgabe
Erstelle eine Web-App (z. B. mit Node.js/Express oder Python/FastAPI), die Informationen von einer KI-Schnittstelle (z. B. Gemini API) abruft und grafisch darstellt.

### Schritte:
1.  **AI Studio:** Geh auf [aistudio.google.com](https://aistudio.google.com/), erstelle einen System-Prompt für deinen Bot und hole dir einen API Key.
2.  **Scaffolding:** Nutze die **Gemini CLI**, um das Grundgerüst deiner App zu erstellen.
3.  **Refinement:** Verwende **GitHub Copilot** im Editor, um UI-Details (z. B. Tailwind CSS) zu verfeinern.
4.  **Deployment:** Teste die App mit den Vorschlägen aus **Antigravity**.

### Dein Ziel:
Konfiguriere den API-Aufruf für dein Vibe-Projekt.
---
Integration der Gemini API (Javascript)
---
```javascript
// Wir rufen die Gemini API über ein SDK auf
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generateAnswer(prompt) {
    const genAI = new <Placeholder>GoogleGenerativeAI</Placeholder>(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generiere eine Antwort basierend auf deinem Vibe-Prompt
    const result = await model.<Placeholder>generateContent</Placeholder>(prompt);
    console.log(result.response.text());
}
```
---
