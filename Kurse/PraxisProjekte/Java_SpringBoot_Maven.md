---
title: "Spring Boot mit Maven (Ohne Starter)"
kategorie: "PraxisProjekte"
level: 3
---
# Projekt: Spring Boot von Grund auf (Ohne Starter)
In diesem Projekt lernst du, wie du eine Spring Boot Anwendung manuell in einer Maven-Umgebung aufsetzt, ohne das Spring Initializr Tool (`start.spring.io`) zu nutzen.

### Warum manuell?
Das Verständnis der Maven-Konfiguration (`pom.xml`) ist entscheidend für das Troubleshooting und die Anpassung von Build-Pipelines. Wenn du weißt, welche Abhängigkeiten wirklich nötig sind, bleibt dein Projekt schlank und übersichtlich.

### Die Schritte:
1.  **Parent POM:** Wir nutzen `spring-boot-starter-parent` als Eltern-POM. Dies verwaltet Versionen für alle Spring-Abhängigkeiten (Dependency Management).
2.  **Starter Dependency:** Der `spring-boot-starter-web` wird benötigt, um Web-Funktionalitäten und den eingebetteten Tomcat-Server zu aktivieren.
3.  **Application Class:** Die Hauptklasse benötigt die `@SpringBootApplication` Annotation und einen Aufruf von `SpringApplication.run()`.

### Lernziele:
*   Struktur der `pom.xml` verstehen.
*   Dependency Management in Maven.
*   Initialisierung einer Spring-Anwendung im Code.

---
Vervollständige die Maven-Konfiguration und die Java-Hauptklasse.
---
```xml
<!-- pom.xml Ausschnitt -->
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId><Placeholder>spring-boot-starter-parent</Placeholder></artifactId>
    <version>3.2.0</version>
</parent>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId><Placeholder>spring-boot-starter-web</Placeholder></artifactId>
    </dependency>
</dependencies>

<!-- Application.java Ausschnitt -->
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@<Placeholder>SpringBootApplication</Placeholder>
public class MySimpleApp {
    public static void main(String[] args) {
        <Placeholder>SpringApplication</Placeholder>.run(MySimpleApp.class, args);
    }
}
```
---
