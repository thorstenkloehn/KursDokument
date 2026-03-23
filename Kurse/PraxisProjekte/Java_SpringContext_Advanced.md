---
title: "Praxis: Context-Aware Services"
kategorie: "PraxisProjekte"
level: 3
---
# Projekt: Programmatischer Zugriff auf den Spring Context

In fortgeschrittenen Spring Boot 4 Szenarien muss eine Klasse manchmal Zugriff auf den gesamten `ApplicationContext` haben, um dynamisch nach Beans zu suchen (z. B. für Plugins oder Generatoren).

### Die Anforderungen
Das Programm soll folgende Funktionen bieten:
1. **Interface Implementierung:** Nutze das Spring-Interface `ApplicationContextAware`.
2. **Speicherung:** Speichere den übergebenen Kontext in einer statischen oder Instanzvariable.
3. **Bean-Suche:** Implementiere eine Methode, die eine Bean anhand ihres Namens oder Typs aus dem Kontext holt.
4. **Lebenszyklus:** Nutze `@PostConstruct`, um nach der Initialisierung eine Aktion auszuführen.

### Logischer Ablauf
1. Implementiere `ApplicationContextAware` in der Klasse `BeanLookupService`.
2. Überschreibe die Methode `setApplicationContext`.
3. Erstelle eine Methode `getBeanByType<T>`, die den internen Kontext nutzt.

### Lernziele
*   Interaktion mit dem `ApplicationContext`.
*   Spring Lifecycle-Interfaces.
*   Dynamische Bean-Auflösung.
---
Dynamischer Bean-Lookup
---
```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Service;

@<Placeholder>Service</Placeholder>
public class BeanLookupService implements <Placeholder>ApplicationContextAware</Placeholder> {

    private ApplicationContext context;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) {
        this.context = applicationContext;
    }

    public <T> T findMyBean(Class<T> beanClass) {
        // Hole die Bean dynamisch aus dem Kontext
        return context.<Placeholder>getBean</Placeholder>(beanClass);
    }
}
```
---
