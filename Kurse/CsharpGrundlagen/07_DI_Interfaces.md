---
title: "DI mit Interfaces (C#)"
kategorie: "C# Grundlagen"
level: 3
---
# Dependency Injection (DI) mit Interfaces
In professionellen C#-Anwendungen (insbesondere in ASP.NET Core) wird Dependency Injection fast ausschließlich über **Interfaces** gelöst. Das bedeutet, eine Klasse fragt nicht nach einer konkreten Klasse (z.B. `SqlServerDatabase`), sondern nach einem Interface (z.B. `IDatabase`).

### Die Vorteile in C#:
1. **Lose Kopplung:** Die Klasse `UserService` muss nicht wissen, wie Daten gespeichert werden, sondern nur, *dass* sie gespeichert werden können.
2. **Mocking für Unit Tests:** In Tests kannst du ein Interface leicht durch ein Mock-Objekt ersetzen, um Seiteneffekte (wie echte Datenbankzugriffe) zu vermeiden.
3. **Open-Closed Prinzip:** Du kannst neue Implementierungen hinzufügen, ohne den bestehenden Code der nutzenden Klassen zu ändern.

### Beispiel: Benachrichtigungssystem
Stell dir vor, deine App soll Nachrichten verschicken. Ob das per SMS oder E-Mail passiert, entscheidet die Konfiguration am Start der App.

---
Vervollständige die Definition des Interfaces und die Injektion im Konstruktor.
---
```csharp
using System;

// 1. Das Interface definiert den Vertrag (Was wird getan?)
public interface IMessageService {
    void <Placeholder>SendMessage</Placeholder>(string message);
}

// 2. Konkrete Implementierung für SMS
public class SmsService : <Placeholder>IMessageService</Placeholder> {
    public void SendMessage(string msg) => Console.WriteLine($"[SMS] Sende: {msg}");
}

// 3. Konkrete Implementierung für E-Mail
public class EmailService : <Placeholder>IMessageService</Placeholder> {
    public void SendMessage(string msg) => Console.WriteLine($"[Email] Sende: {msg}");
}

// 4. Die nutzende Klasse arbeitet NUR mit dem Interface
public class NotificationService {
    private readonly IMessageService _service;

    // Konstruktor-Injektion: Akzeptiere jedes Objekt, das IMessageService implementiert
    public NotificationService(<Placeholder>IMessageService service</Placeholder>) {
        _service = service;
    }

    public void Notify(string text) {
        _service.SendMessage(text);
    }
}

public class Program {
    public static void Main() {
        // Wir entscheiden hier (manuell), welche Implementierung genutzt wird
        IMessageService myService = new EmailService();
        
        // Injiziere den EmailService in den NotificationService
        var app = new NotificationService(<Placeholder>myService</Placeholder>);
        app.Notify("Wichtige Nachricht!");
    }
}
```
---
