---
title: "Praxis: Digitale Inventarliste"
katgorie: "C# Grundlagen"
level: 1
---
# Projekt: Deine eigene Inventarverwaltung

In diesem Projekt erstellst du ein Programm, mit dem du Gegenstände (z. B. Bücher, Spiele oder Werkzeuge) erfassen und verwalten kannst.

### Die Anforderungen
Das Programm soll in der Konsole laufen und folgende Funktionen bieten:
1. **Eingabe:** Der Nutzer kann den Namen eines Gegenstands und die vorhandene Menge eingeben.
2. **Speicherung:** Alle eingegebenen Daten werden während der Laufzeit in einer Liste gespeichert.
3. **Anzeige:** Auf Knopfdruck werden alle gespeicherten Gegenstände tabellarisch untereinander ausgegeben.
4. **Beenden:** Das Programm läuft in einer Schleife, bis der Nutzer "Beenden" wählt.

### Logischer Ablauf (Pseudocode)
1. Initialisiere eine leere Liste für die Gegenstände.
2. Starte eine Endlosschleife (`while`).
3. Zeige ein Menü an: (1) Hinzufügen, (2) Anzeigen, (3) Beenden.
4. Lese die Wahl des Nutzers ein.
5. **Falls (1):** Frage Name und Menge ab und füge sie der Liste hinzu.
6. **Falls (2):** Nutze eine `foreach`-Schleife, um jedes Element auszugeben.
7. **Falls (3):** Brich die Schleife ab und verabschiede den Nutzer.

### Deine Lernziele
*   Umgang mit Listen (`List<T>`).
*   Verwendung von `Console.ReadLine()` und `Console.WriteLine()`.
*   Strukturierung von Menü-Logik mit `switch` oder `if-else`.
---
