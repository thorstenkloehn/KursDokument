---
title: "POCO Klassen in C#"
kategorie: "C# Grundlagen"
level: 1
---
Ein **POCO** (Plain Old CLR Object) ist eine Klasse, die nicht von einer Framework-spezifischen Basisklasse (wie z.B. von Entity Framework oder ASP.NET) erbt. 

### Merkmale:
- **Einfachheit**: Nur Eigenschaften (Properties) und ggf. einfache Methoden.
- **Testbarkeit**: Da sie keine Abhängigkeiten haben, lassen sie sich leicht in Unit Tests verwenden.
- **Persistence Ignorance**: Das Objekt weiß nicht, wie es in einer Datenbank gespeichert wird.

In modernem C# nutzen wir dafür meist **Auto-Implemented Properties**.

### Deine Aufgabe:
Vervollständige die POCO-Klasse für ein Buch.
---
Definition eines Buch-Modells
---
```csharp
public class Book
{
    // Eine eindeutige ID
    public int <Placeholder>Id</Placeholder> { get; set; }

    // Der Titel des Buches
    public string <Placeholder>Title</Placeholder> { get; set; }

    // Das Erscheinungsjahr
    public int Year { get; <Placeholder>set</Placeholder>; }
}
```
---
