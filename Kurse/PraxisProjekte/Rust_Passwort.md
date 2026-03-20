---
title: "Praxis: Passwort-Prüfer"
katgorie: "Rust Grundlagen"
level: 2
---
# Projekt: Security Check

Rust ist bekannt für Sicherheit – erstelle ein Programm, das die Stärke eines Passworts nach Sicherheitskriterien bewertet.

### Die Anforderungen
1. **Eingabe:** Der Nutzer gibt ein Passwort ein.
2. **Längenprüfung:** Das Passwort muss mindestens 8 Zeichen lang sein.
3. **Komplexität:** Es wird geprüft, ob Zahlen oder Sonderzeichen enthalten sind.
4. **Feedback:** Das Programm gibt eine Bewertung aus (z. B. "Schwach", "Mittel", "Stark").

### Logischer Ablauf
1. Lese den String vom Standard-Input ein.
2. Ermittle die Länge des Strings (`len()`).
3. Iteriere über die Zeichen des Strings, um nach Ziffern oder Symbolen zu suchen.
4. Verwende `match`, um basierend auf den gefundenen Kriterien die Stufe auszugeben.

### Deine Lernziele
*   Verständnis von `String` und `&str`.
*   Effektive Nutzung von `match`-Statements.
*   Einfache String-Manipulation und Iteration.
---
