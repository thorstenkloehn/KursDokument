---
title: "POJO Klassen in Java"
kategorie: "Java Grundlagen"
level: 1
---
In Java nennen wir das Ganze **POJO** (Plain Old Java Object). Es ist das Herzstück der Enterprise-Entwicklung (z. B. in Spring Boot oder Hibernate).

### Die klassische Struktur:
1. **Private Felder**: Alle Daten sind gekapselt.
2. **Getter/Setter**: Methoden zum Lesen und Schreiben der Daten.
3. **No-Args Constructor**: Ein leerer Konstruktor für Frameworks (Reflection).

### Deine Aufgabe:
Implementiere die Getter und Setter nach dem Standard-Namensschema.
---
Klassisches Java-POJO (Kapselung)
---
```java
public class User {
    private String name;
    private int age;

    // Standard-Konstruktor
    public User() { }

    // Getter für Name
    public String <Placeholder>getName</Placeholder>() {
        return name;
    }

    // Setter für Name
    public void <Placeholder>setName</Placeholder>(String name) {
        this.name = name;
    }
}
```
---
