---
title: "Praxis: Bankkonto-Simulation"
katgorie: "Java Grundlagen"
level: 2
---
# Projekt: Der einfache Geldautomat

Simuliere ein Bankkonto, das grundlegende Transaktionen ermöglicht und dabei die Korrektheit der Daten prüft.

### Die Anforderungen
1. **Startkapital:** Das Programm startet mit einem festen Betrag (z. B. 1000€).
2. **Transaktionen:** Der Nutzer kann Beträge einzahlen oder abheben.
3. **Validierung:** Es darf nicht mehr Geld abgehoben werden, als auf dem Konto vorhanden ist.
4. **Verlauf:** Nach jeder Aktion wird der aktuelle Kontostand angezeigt.

### Logischer Ablauf
1. Erstelle eine Variable für den Kontostand.
2. Frage den Nutzer nach einer Aktion (Einzahlen / Auszahlen).
3. Lese den Betrag ein.
4. Prüfe bei Auszahlungen: `Ist Betrag <= Kontostand?`.
5. Berechne den neuen Kontostand.
6. Gib eine Erfolgs- oder Fehlermeldung aus.

### Deine Lernziele
*   Umgang mit Datentypen für Geldwerte (`double` oder `BigDecimal`).
*   Implementierung von Logik-Prüfungen (Bedingungen).
*   Saubere Formatierung der Konsolenausgabe.
---
