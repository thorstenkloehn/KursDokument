---
title: "Einführung in HTTP und Kestrel"
katgorie: "ASP.NET Core HTTP"
---
HTTP (Hypertext Transfer Protocol) ist das grundlegende Protokoll für die Kommunikation im Web. Es arbeitet nach dem Client-Server-Modell: Ein Client (z.B. Browser) sendet eine Anfrage, der Server antwortet mit Ressourcen oder Fehlermeldungen. HTTP ist zustandslos – jeder Request ist unabhängig.

### HTTP-Server und Kestrel
Ein HTTP-Server verarbeitet Anfragen und sendet Antworten. Kestrel ist ein moderner, plattformübergreifender Webserver für ASP.NET Core.

### Wichtige Statuscodes:
- **200 OK**: Erfolg
- **201 Created**: Ressource erstellt
- **400 Bad Request**: Syntaxfehler
- **401 Unauthorized**: Authentifizierung nötig
- **404 Not Found**: Ressource nicht gefunden
- **500 Internal Error**: Serverfehler
---
Codebeispiele
---
```http
// Beispiel für eine HTTP-Response
HTTP/1.1 <Placeholder>200 OK</Placeholder>
Content-Type: <Placeholder>text/html</Placeholder>
Content-Length: 137

<html>
<body>
<h1>Hello, World!</h1>
</body>
</html>
```
---
