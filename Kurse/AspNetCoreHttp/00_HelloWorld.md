---
title: "Hello World in ASP.NET Core"
kategorie: "AspNetCore Http"
level: 1
---
In einer Minimal API wird eine Route definiert, die einen String zurückgibt.

---
Codebeispiele
---
```csharp
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.<Placeholder>MapGet</Placeholder>("/", () => "Hello World!");

app.Run();
```
---
