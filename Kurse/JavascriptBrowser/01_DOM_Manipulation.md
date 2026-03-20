---
title: "DOM-Manipulation mit JavaScript"
kategorie: "JavaScript Browser"
level: 2
---
In JavaScript können wir das Aussehen und den Inhalt einer Webseite verändern, indem wir das **DOM (Document Object Model)** manipulieren.

### Konzepte:
1. **Selektoren:** Mit `document.getElementById("id")` finden wir ein Element auf der Seite.
2. **Eigenschaften:** Wir können den Text eines Elements mit `.innerText` oder `.textContent` ändern.
3. **Variablen:** Mit `let` und `const` speichern wir Daten (IDs, Texte, etc.).

---
Ändere den Text eines HTML-Elements mit der ID "titel" zu "Gelernt!".
---
```javascript
// Wir suchen das Element mit der ID 'titel'
const <Placeholder>titel</Placeholder> = document.getElementById("titel");

// Wir weisen dem Element einen neuen Text zu
titel.<Placeholder>innerText</Placeholder> = "Gelernt!";
```
---
