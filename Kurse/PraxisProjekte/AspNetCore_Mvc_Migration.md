---
title: "Minimal-API zu ASP.NET Core MVC"
kategorie: "PraxisProjekte"
level: 1
---
# Projekt: Von Minimal zu MVC

In diesem Praxisprojekt lernst du, wie man eine einfache ASP.NET Core Anwendung (Minimal API) zu einer vollständigen **ASP.NET Core MVC** Anwendung ausbaut. 

### Die Aufgabe
Aktuell gibt deine Anwendung nur einen einfachen String aus. Du sollst sie so konfigurieren, dass sie das **Model-View-Controller (MVC)** Muster unterstützt, damit wir später HTML-Views und Controller nutzen können.

### Schritte zur Migration:
1. **Dienste registrieren:** Damit ASP.NET Core weiß, dass wir MVC nutzen wollen, müssen wir die entsprechenden Controller-Dienste im `builder` hinzufügen.
2. **Middleware konfigurieren:** Wir müssen die Anwendung anweisen, Anfragen an die richtigen Controller weiterzuleiten (Routing).
3. **Default Route:** Wir nutzen eine Standardroute, damit der `HomeController` automatisch aufgerufen wird.

### Lernziele
*   Verstehen der `Program.cs` Struktur.
*   Registrierung von MVC-Services (`AddControllersWithViews`).
*   Einrichten des Routings für MVC-Controller.
---
Migration einer Minimal-Anwendung
---
```csharp
var builder = WebApplication.CreateBuilder(args);

// SCHRITT 1: Registriere die MVC-Dienste (Controller mit Views)
builder.Services.<Placeholder>AddControllersWithViews</Placeholder>();

var app = builder.Build();

// SCHRITT 2: Statische Dateien erlauben (für CSS/JS in MVC)
app.UseStaticFiles();

app.UseRouting();

// SCHRITT 3: Standard-Routing für MVC konfigurieren
app.<Placeholder>MapDefaultControllerRoute</Placeholder>();

app.Run();
```
---
