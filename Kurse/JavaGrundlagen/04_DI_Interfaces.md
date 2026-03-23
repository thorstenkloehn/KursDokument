---
title: "DI mit Interfaces"
kategorie: "Java Grundlagen"
level: 3
---
# Dependency Injection (DI) mit Interfaces
In der Praxis nutzt man DI fast immer zusammen mit **Interfaces**. Dies ermöglicht es uns, eine konkrete Implementierung (z.B. eine echte Datenbank) gegen eine andere (z.B. ein Mock-Objekt zum Testen) auszutauschen, ohne den Code der Klasse zu ändern, die den Dienst nutzt.

### Das Prinzip:
Die abhängige Klasse kennt nur das Interface (`Was` getan werden soll), nicht die konkrete Klasse (`Wie` es getan wird).

### Die Vorteile:
1. **Lose Kopplung:** Klassen hängen nicht von konkreten Implementierungen ab.
2. **Testbarkeit:** Man kann Interfaces leicht durch "Attrappen" (Mocks) ersetzen.
3. **Flexibilität:** Neue Funktionen können hinzugefügt werden, indem man einfach eine neue Klasse erstellt, die das Interface implementiert.

### Beispiel:
Ein `BenutzerService` benötigt einen `BenachrichtigungsDienst`. Ob dieser Dienst E-Mails, SMS oder Push-Nachrichten sendet, sollte dem `BenutzerService` egal sein.

---
Vervollständige die Implementierung des Interfaces und die Injektion im Konstruktor.
---
```java
// 1. Das Interface definiert die Methode
interface MessageService {
    void <Placeholder>sendMessage</Placeholder>(String message);
}

// 2. Konkrete Implementierung: Email
class EmailService implements <Placeholder>MessageService</Placeholder> {
    public void sendMessage(String message) {
        System.out.println("Sende E-Mail: " + message);
    }
}

// 3. Konkrete Implementierung: SMS
class SmsService implements <Placeholder>MessageService</Placeholder> {
    public void sendMessage(String message) {
        System.out.println("Sende SMS: " + message);
    }
}

// 4. Die Klasse nutzt nur das Interface (Abstraktion)
class UserNotification {
    private MessageService service;

    // Konstruktor-Injektion: Hier wird ein beliebiges Objekt injiziert, 
    // das das MessageService Interface implementiert.
    public UserNotification(<Placeholder>MessageService service</Placeholder>) {
        this.service = service;
    }

    public void notifyUser(String text) {
        service.sendMessage(text);
    }
}

public class Main {
    public static void main(String[] args) {
        // Wir entscheiden hier, welche Implementierung genutzt wird:
        MessageService myService = new EmailService();
        
        // Injiziere den EmailService
        UserNotification notifier = new UserNotification(<Placeholder>myService</Placeholder>);
        notifier.notifyUser("Hallo Welt!");
    }
}
```
---
