---
title: "Praxis: Wetter-Daten-Analysator"
katgorie: "Go Grundlagen"
level: 2
---
# Projekt: Temperatur-Statistik

Dieses Tool hilft dabei, eine Liste von Temperaturwerten auszuwerten und statistische Eckdaten zu liefern.

### Die Anforderungen
1. **Datenerfassung:** Der Nutzer gibt die Temperaturen für die letzten 7 Tage ein.
2. **Berechnung:** Das Programm ermittelt den Durchschnittswert, den Höchstwert und den Tiefstwert.
3. **Warnung:** Falls ein Wert unter 0 Grad liegt, soll eine Frost-Warnung ausgegeben werden.

### Logischer Ablauf
1. Erstelle ein `Slice` oder `Array` für 7 Fließkommazahlen.
2. Nutze eine `for`-Schleife, um die 7 Werte nacheinander einzulesen.
3. Berechne die Summe aller Werte für den Durchschnitt.
4. Vergleiche jeden Wert, um das Minimum und Maximum zu finden.
5. Gib die Ergebnisse formatiert aus.

### Deine Lernziele
*   Arbeit mit `Slices` und der `range`-Schleife.
*   Mathematische Berechnungen in Go.
*   Formatierte Ausgabe mit dem `fmt`-Paket.
---
