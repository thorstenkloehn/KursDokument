---
title: "Models und Data Binding"
katgorie: "Web-Entwicklung"
---
Models repräsentieren die Daten einer Anwendung. Wenn ein Benutzer Daten in ein Formular eingibt, sorgt das **Data Binding** dafür, dass diese Eingaben automatisch an die Controller-Action übergeben werden.

### Wichtige Konzepte:
- **Models**: POCO-Klassen (Plain Old CLR Objects), die Daten halten.
- **Model Validation**: Überprüfung der Eingabedaten mit Data Annotations (z. B. `[Required]`).
- **ViewModel**: Ein spezielles Model, das nur Daten für eine bestimmte View enthält.
---
Codebeispiele
---
```csharp
using System.ComponentModel.DataAnnotations;

public class Benutzer
{
    [Required]
    public string Name { get; set; }

    [Range(18, 99)]
    public int <Placeholder>Alter</Placeholder> { get; set; }
}

// Im Controller
[HttpPost]
public IActionResult Registrieren(<Placeholder>Benutzer</Placeholder> neuerBenutzer)
{
    if (ModelState.IsValid)
    {
        // Speichere Benutzer
        return RedirectToAction("Erfolg");
    }
    return View(neuerBenutzer);
}
```
---
