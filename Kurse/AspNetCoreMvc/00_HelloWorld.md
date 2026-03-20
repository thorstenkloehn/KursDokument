---
title: "Hello World im MVC Controller"
kategorie: "AspNetCore Mvc"
level: 1
---
Ein MVC Controller gibt eine View oder direkt Text (Content) zurück.

---
Codebeispiele
---
```csharp
using Microsoft.AspNetCore.Mvc;

public class HomeController : <Placeholder>Controller</Placeholder>
{
    public IActionResult Index()
    {
        return <Placeholder>Content</Placeholder>("Hello World!");
    }
}
```
---
