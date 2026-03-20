---
title: "Einführung in Spring Boot 4"
kategorie: "SpringBoot 4"
level: 3
---
Spring Boot 4 (die nächste Generation) baut auf Java 21+ und Spring Framework 7 auf. Es vereinfacht das Erstellen von produktionsbereiten Java-Anwendungen weiter durch Auto-Configuration und "Opinionated Defaults".

### Hauptmerkmale:
- **Native Support**: Volle Unterstützung für GraalVM Native Images.
- **Project Loom**: Standardmäßige Nutzung von Virtual Threads für hohe Skalierbarkeit.
- **Zero Config**: Noch weniger Konfiguration für Standard-Datenbanken.
---
Codebeispiele
---
```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@<Placeholder>SpringBootApplication</Placeholder>
public class Application {
    public static void main(String[] args) {
        <Placeholder>SpringApplication</Placeholder>.run(Application.class, args);
    }
}
```
---
