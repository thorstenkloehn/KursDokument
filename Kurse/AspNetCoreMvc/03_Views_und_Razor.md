---
title: "Views und Razor-Syntax"
katgorie: "Web-Entwicklung"
---
Views werden in ASP.NET Core MVC mit der **Razor-View-Engine** erstellt. Razor ermöglicht es, C#-Code direkt in HTML-Dateien (Dateiendung `.cshtml`) zu verwenden.

Um Daten von einem Controller an eine View zu übergeben, nutzen wir oft das `model`.

### Wichtige Konzepte:
- **@model**: Deklariert den Datentyp der View.
- **HTML-Helper & Tag-Helper**: Erleichtern das Erstellen von Formularen und Links.
- **@**: Das Symbol, um C#-Code einzuleiten.
---
Codebeispiele
---
```razor
@model string

<h1>Willkommen auf der @<Placeholder>Model</Placeholder> Seite!</h1>

<p>Heute ist der: @<Placeholder>DateTime.Now</Placeholder></p>

<a asp-controller="Home" asp-action="Index">Zurück zur Startseite</a>
```
---
