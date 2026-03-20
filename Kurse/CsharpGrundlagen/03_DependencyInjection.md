---
title: "Dependency Injection (DI)"
katgorie: "C# Grundlagen"
level: 2
---
Dependency Injection (DI) ist ein Entwurfsmuster, bei dem Abhängigkeiten (Objekte, die eine Klasse benötigt) von außen bereitgestellt werden. In C# und .NET ist DI ein Kernkonzept, das besonders in ASP.NET Core intensiv genutzt wird.

### Warum DI?
- **Testbarkeit**: Du kannst echte Objekte durch "Mock-Objekte" ersetzen.
- **Wartbarkeit**: Klassen sind weniger stark voneinander abhängig (lose Kopplung).
- **Flexibilität**: Implementierungen können ausgetauscht werden, ohne die nutzende Klasse zu ändern.

### Beispiel: Konstruktor-Injektion
Das ist die gängigste Form in C#. Die Abhängigkeiten werden direkt im Konstruktor angefordert.
---
Codebeispiele
---
```csharp
using System;

public class Radio {
    public void Einschalten() => Console.WriteLine("Radio läuft...");
}

public class Motor {
    public void Starten() => Console.WriteLine("Motor brummt...");
}

public class Auto {
    private readonly Motor _motor;
    private readonly Radio _radio;

    // Aufgabe: Implementiere die Konstruktor-Injektion
    public Auto(<Placeholder>Motor motor, Radio radio</Placeholder>) {
        _motor = motor;
        _radio = radio;
    }

    public void Fahren() {
        _radio.Einschalten();
        _motor.Starten();
        Console.WriteLine("Auto fährt los!");
    }
}

public class Program {
    public static void Main() {
        var m = new Motor();
        var r = new Radio();
        
        // Aufgabe: Erzeuge das Auto und injiziere die Objekte
        var meinAuto = new Auto(<Placeholder>m, r</Placeholder>);
        meinAuto.Fahren();
    }
}
```
---
