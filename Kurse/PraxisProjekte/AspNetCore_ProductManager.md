---
title: "Praxis: Produktverwaltung mit MVC"
kategorie: "PraxisProjekte"
level: 2
---
# Projekt: Produktverwaltung

Nachdem du die Grundstruktur von ASP.NET Core MVC kennst, bauen wir nun eine einfache Produktverwaltung auf. Wir benötigen einen Controller, der eine Liste von Produkten an eine View übergibt.

### Die Anforderungen
Das Programm soll folgende Funktionen bieten:
1. **Controller-Struktur:** Ein `ProductController`, der von der Basisklasse `Controller` erbt.
2. **Datenquelle:** Eine einfache Liste von Strings (Produktnamen) als statische Daten.
3. **Action-Methoden:** Eine `Index`-Methode, die alle Produkte anzeigt.
4. **View-Übergabe:** Die Daten werden mit der `View()`-Methode an das Razor-Template übergeben.

### Logischer Ablauf
1. Erstelle eine neue Klasse `ProductController`.
2. Initialisiere eine Liste von Produkten (z.B. "Laptop", "Maus", "Tastatur").
3. Implementiere die `Index()` Action.
4. Gib die Liste als Model an die View zurück.

### Lernziele
*   Erstellung von Controllern in MVC.
*   Umgang mit Models in Actions.
*   Zusammenhang zwischen Controller und View (`return View(model)`).
---
Ein einfacher Produkt-Controller
---
```csharp
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

public class <Placeholder>ProductController</Placeholder> : Controller
{
    private static List<string> _products = new List<string> { "Laptop", "Maus", "Monitor" };

    // Action zum Anzeigen aller Produkte
    public IActionResult Index()
    {
        // Übergebe die Liste an die View
        return <Placeholder>View(_products)</Placeholder>;
    }

    // Action zum Hinzufügen (vereinfacht)
    [HttpPost]
    public IActionResult Add(string name)
    {
        _products.Add(name);
        return <Placeholder>RedirectToAction("Index")</Placeholder>;
    }
}
```
---
