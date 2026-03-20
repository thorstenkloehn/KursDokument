---
title: "Projekt: Interaktiver Counter"
kategorie: "PraxisProjekte"
level: 1
---
In diesem Projekt erstellen wir die Logik für einen einfachen Zähler. Jedes Mal, wenn ein Button geklickt wird, soll die Zahl auf der Webseite steigen oder sinken.

### Konzepte:
1. **Event Listener:** `addEventListener("click", ...)` wartet auf Klicks.
2. **Inkrement/Dekrement:** `++` oder `--` verändern eine Zahl um eins.
3. **DOM-Update:** Wir schreiben das Ergebnis zurück ins HTML.

---
Vervollständige die Logik für den Inkrement-Button und die Anzeige.
---
```javascript
let counter = 0;
const anzeige = document.getElementById("counter-display");

// Funktion für den Klick auf den 'Hoch'-Button
document.getElementById("btn-up").<Placeholder>addEventListener</Placeholder>("click", () => {
    // Erhöhe den Zähler um 1
    counter<Placeholder>++</Placeholder>;
    
    // Aktualisiere den Text auf der Seite
    anzeige.innerText = counter;
});
```
---
