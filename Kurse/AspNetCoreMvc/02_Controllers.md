---
title: "Controller und Actions"
katgorie: "Web-Entwicklung"
---
Controller sind das Herzstück von ASP.NET Core MVC. Sie verarbeiten eingehende HTTP-Anfragen, interagieren mit Modellen und geben Ansichten (Views) zurück.

Jede Methode in einem Controller, die auf eine Anfrage antworten kann, wird als **Action** bezeichnet.

### Wichtige Konzepte:
- **Base Class**: Controller leiten meist von `Microsoft.AspNetCore.Mvc.Controller` ab.
- **Action Results**: Methoden geben oft `IActionResult` oder `ViewResult` zurück.
- **Routing**: Standardmäßig `{controller}/{action}/{id}`.
---
Codebeispiele
---
```csharp
using Microsoft.AspNetCore.Mvc;

public class <Placeholder>HomeController</Placeholder> : Controller
{
    // Die Standard-Action für die Startseite
    public IActionResult Index()
    {
        return <Placeholder>View()</Placeholder>;
    }

    // Eine Action mit Parameter
    public IActionResult Details(int id)
    {
        return View(id);
    }
}
```
---
