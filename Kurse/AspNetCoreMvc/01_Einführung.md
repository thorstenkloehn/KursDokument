---
title: "ASP.NET Core MVC Einführung"
katgorie: "Web-Entwicklung"
---
In dieser Lektion lernen wir die grundlegende Struktur einer ASP.NET Core MVC-Anwendung kennen. 
Der Einstiegspunkt jeder Anwendung ist die `Program.cs`, in der die Dienste registriert und die Middleware-Pipeline konfiguriert wird.

### Wichtige Konzepte:
- **Builder**: Erstellt die WebApplication.
- **Services**: Abhängigkeiten wie MVC werden hier registriert.
- **App**: Die konfigurierte Anwendung, die Anfragen verarbeitet.
---
Codebeispiele
---
```csharp
var builder = WebApplication.CreateBuilder(args);

// Füge MVC-Dienste hinzu
builder.Services.<Placeholder>AddControllersWithViews</Placeholder>();

var app = builder.Build();

// Konfiguriere die Route
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
```
---
