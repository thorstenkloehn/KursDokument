---
title: "Field Shadowing in C#"
katgorie: "C# Grundlagen"
level: 2
---
In C# können lokale Variablen ein Feld (Instanzvariable) derselben Klasse überschatten. Um auf das Feld zuzugreifen, verwendet man `this.`.

---
```csharp
using System;

class Person {
    string name = "Standard";

    public void SetzeName(string <Placeholder>name</Placeholder>) {
        // Lokale Variable 'name' überschattet Instanzvariable
        // Wie weisen wir dem Instanz-Feld den Wert zu?
        <Placeholder>this.name</Placeholder> = <Placeholder>name</Placeholder>;
    }

    public void ZeigeName() {
        Console.WriteLine(name);
    }
}
```
---
