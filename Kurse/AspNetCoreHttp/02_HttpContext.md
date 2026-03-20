---
title: "HttpContext: Request und Response"
katgorie: "ASP.NET Core HTTP"
---
In ASP.NET Core bietet der `HttpContext` Zugriff auf alle Informationen der aktuellen HTTP-Anfrage und ermöglicht das Konfigurieren der Antwort.

### Ablauf:
1. Kestrel empfängt die Anfrage.
2. Die Middleware-Pipeline verarbeitet sie.
3. Der `HttpContext` kapselt Request und Response.

### Zugriff auf Informationen:
- **context.Request.Path**: Der Pfad der Anfrage.
- **context.Request.Method**: Die HTTP-Methode (GET, POST, etc.).
- **context.Response.Headers**: Header-Informationen setzen.
- **context.Response.StatusCode**: Den HTTP-Status festlegen.
---
Codebeispiele
---
```csharp
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.Run(async (HttpContext <Placeholder>context</Placeholder>) =>
{
    // Statuscode und Header setzen
    context.Response.<Placeholder>StatusCode</Placeholder> = 200;
    context.Response.Headers["Content-Type"] = "text/html";
    
    // Request Informationen auslesen
    string path = context.<Placeholder>Request</Placeholder>.Path;
    
    await context.Response.WriteAsync($"<h1>Pfad: {path}</h1>");
});

app.Run();
```
---
