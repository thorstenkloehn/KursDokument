---
title: "Kontrollstrukturen (if-else)"
katgorie: "Java Grundlagen"
---
Mit `if`-Abfragen können wir Entscheidungen im Programmcode treffen. Wenn eine Bedingung erfüllt (`true`) ist, wird der entsprechende Codeblock ausgeführt.

### Aufbau:
```java
if (Bedingung) {
    // Code wenn wahr
} else {
    // Code wenn falsch
}
```
---
Codebeispiele
---
```java
public class Main {
    public static void main(String[] args) {
        int zahl = 10;
        
        <Placeholder>if</Placeholder> (zahl > 0) {
            System.out.println("Zahl ist positiv.");
        } <Placeholder>else</Placeholder> {
            System.out.println("Zahl ist nicht positiv.");
        }
    }
}
```
---
