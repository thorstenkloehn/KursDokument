---
title: "Der Spring ApplicationContext"
kategorie: "SpringBoot 4"
level: 3
---
In Spring Boot 4 ist der **ApplicationContext** der zentrale Container, der alle Komponenten (Beans) verwaltet. Er kümmert sich um die Erzeugung, Konfiguration und den gesamten Lebenszyklus der Objekte.

### Wichtige Konzepte:
- **Bean Definition**: Beans werden entweder durch `@Component`-Scanning oder explizit in `@Configuration`-Klassen mit `@Bean` definiert.
- **Bean Scopes**: Standardmäßig sind alle Beans `Singleton` (eine Instanz pro Kontext).
- **Context Refresh**: Der Moment, in dem alle Beans instanziiert und verdrahtet werden.
- **Dependency Lookup**: Manchmal müssen Beans manuell aus dem Kontext geholt werden (obwohl DI bevorzugt wird).

### Deine Aufgabe:
Konfiguriere eine Klasse als Konfigurationsquelle und definiere eine Bean explizit.
---
Konfiguration und Bean-Erzeugung
---
```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@<Placeholder>Configuration</Placeholder>
public class AppConfig {

    // Erstelle eine Bean manuell im Kontext
    @<Placeholder>Bean</Placeholder>
    public MyDatabaseConnector databaseConnector() {
        return new MyDatabaseConnector("localhost:5432");
    }
}

// Eine Komponente, die automatisch gefunden wird
@<Placeholder>Component</Placeholder>
public class UserStatistics {
    // ...
}
```
---
