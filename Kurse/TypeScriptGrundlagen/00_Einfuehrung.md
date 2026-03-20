---
title: "Einführung in TypeScript"
kategorie: "TypeScript Grundlagen"
level: 2
---
TypeScript ist eine Erweiterung von JavaScript, die **statische Typisierung** hinzufügt. Das bedeutet, wir können festlegen, welchen Datentyp eine Variable haben darf (z. B. nur Zahlen oder nur Texte).

### Warum TypeScript?
1. **Fehlervermeidung:** Fehler werden bereits beim Schreiben des Codes erkannt, nicht erst beim Ausführen.
2. **IntelliSense:** Die Entwicklungsumgebung (IDE) macht bessere Vorschläge.
3. **Dokumentation:** Typen machen den Code lesbarer und verständlicher.

---
Deklariere die Variablen mit den korrekten Typen (string, number, boolean).
---
```typescript
// Explizite Typisierung von Variablen
let name: <Placeholder>string</Placeholder> = "Max Mustermann";
let alter: <Placeholder>number</Placeholder> = 25;
let istAktiv: <Placeholder>boolean</Placeholder> = true;

console.log(`${name} ist ${alter} Jahre alt.`);
```
---
