---
title: "Speicherverwaltung: Stack, Heap & Statisch"
kategorie: "C# Grundlagen"
level: 2
---
In C# (C-Sharp) wird der Speicher für Daten auf verschiedene Arten verwaltet:

### 1. Stack (Stapelspeicher)
- **Wer?** Wertetypen (`int`, `bool`, `struct`) und Referenz-*Zeiger*.
- **Wann?** Automatisch beim Methodenaufruf (LIFO: Last-In-First-Out).
- **Eigenschaft:** Sehr schnell, aber klein. Daten verschwinden, wenn die Methode endet.

### 2. Heap (Haufen)
- **Wer?** Instanzen von Referenztypen (`class`, `string`, `Array`).
- **Wann?** Wenn du `new` benutzt.
- **Eigenschaft:** Größer, wird vom **Garbage Collector (GC)** aufgeräumt.

### 3. Statischer Speicher (Static)
- **Wer?** Variablen mit dem `static`-Modifizierer.
- **Eigenschaft:** Existiert während der gesamten Programmlaufzeit. Wird zwischen allen Instanzen einer Klasse geteilt.

---
Verstehe, wie Speicherbereiche in C# genutzt werden.
---
```csharp
using System;

class Auto {
    // Statisches Feld: Wird im statischen Speicher abgelegt
    // und von allen Instanzen der Klasse Auto geteilt.
    public <Placeholder>static</Placeholder> int anzahlAutos = 0;

    public string modell; // Heap (da Teil der Klasse)

    public Auto(string m) {
        modell = m;
        // Inkrementiere den gemeinsamen Zähler
        anzahlAutos++;
    }
}

public class Program {
    public static void Main() {
        // Lokale Variable (Wertetyp): Wird auf dem <Placeholder>Stack</Placeholder> gespeichert.
        int x = 10;

        // Instanz einer Klasse: Der Zeiger liegt auf dem Stack,
        // das eigentliche Objekt liegt im <Placeholder>Heap</Placeholder>.
        Auto a1 = new Auto("BMW");
        Auto a2 = new Auto("Audi");

        Console.WriteLine($"Es wurden {Auto.anzahlAutos} Autos erstellt.");
    }
}
```
---
