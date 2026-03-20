---
title: "Variablen und Datentypen"
kategorie: "C# Grundlagen"
---
In C# (C-Sharp) müssen Variablen vor ihrer Verwendung deklariert werden. C# ist eine stark typisierte Sprache.

### Wichtige Datentypen:
- **int**: Ganze Zahlen (z. B. 100)
- **double**: Fließkommazahlen (z. B. 9.99)
- **string**: Texte (z. B. "C# macht Spaß")
- **bool**: Wahrheitswerte (`true` oder `false`)
---
Codebeispiele
---
```csharp
using System;

public class Program {
    public static void Main() {
        // Ganzzahl deklarieren
        <Placeholder>int</Placeholder> punkte = 100;
        
        // Text deklarieren
        <Placeholder>string</Placeholder> nachricht = "Punkte: ";
        
        Console.WriteLine(nachricht + punkte);
    }
}
```
---
