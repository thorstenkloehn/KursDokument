---
title: "Methoden und Testing mit Postman"
katgorie: "ASP.NET Core HTTP"
---
HTTP-Methoden legen fest, welche Aktion auf einer Ressource ausgeführt werden soll.

### GET vs. POST:
- **GET**: Daten abfragen. Parameter stehen in der URL. Idempotent und cachbar.
- **POST**: Daten senden. Parameter stehen im Body. Nicht idempotent.

### Testen mit Postman:
Postman ist ein Tool zum Testen von HTTP-Anfragen. Damit können Sie Endpunkte manuell ansprechen und die Responses (Statuscodes, Header, Body) analysieren.

### Zusammenfassung:
HTTP ist das Rückgrat des Webs. ASP.NET Core bietet mit Kestrel und der Middleware-Pipeline eine performante Umgebung zur Verarbeitung von Requests.
---
Codebeispiele
---
```csharp
app.MapGet("/", () => "<Placeholder>Hallo Welt</Placeholder>");

app.MapPost("/data", (HttpContext context) => {
    // Verarbeitet eine POST-Anfrage
    return Results.<Placeholder>Ok</Placeholder>(new { message = "Daten empfangen" });
});
```
---
