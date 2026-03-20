---
title: "Referenzen in C#"
kategorie: "C# Grundlagen"
level: 2
---
In C# werden Klassen als **Referenztypen** im Heap verwaltet. Structs und einfache Datentypen sind **Wertetypen** im Stack.

- `ref`: Übergibt einen Wertetyp per Referenz an eine Methode.
- `in`, `out`: Spezielle Referenzübergaben für optimierten Zugriff.

---
```csharp
using System;

class Program {
    static void Main() {
        int alter = 20;
        
        // Wert per Referenz an die Methode übergeben
        AddiereEins(<Placeholder>ref</Placeholder> alter);
        
        Console.WriteLine($"Alter ist nun: {alter}");
    }
    
    static void AddiereEins(<Placeholder>ref</Placeholder> int zahl) {
        zahl++;
    }
}
```
---
