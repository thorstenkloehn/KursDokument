---
title: "Dependency Injection (DI)"
katgorie: "Java Grundlagen"
level: 2
---
Dependency Injection (DI) ist ein Entwurfsmuster, bei dem Abhängigkeiten von außen bereitgestellt werden, anstatt sie innerhalb der Klasse selbst zu erzeugen. Dies erhöht die Testbarkeit und Flexibilität.

### Arten der Injektion:
1. **Konstruktor-Injektion**: Abhängigkeiten werden beim Erstellen des Objekts übergeben (Best Practice).
2. **Setter-Injektion**: Abhängigkeiten werden nach der Erstellung über eine Methode gesetzt.

### Vorteil:
Klassen sind "lose gekoppelt". Wenn du einen `Motor` gegen einen `ElektroMotor` austauschen willst, musst du die Klasse `Auto` nicht verändern.
---
Codebeispiele
---
```java
class Radio {
    public void einschalten() {
        System.out.println("Radio läuft!");
    }
}

class Motor {
    public void starten() {
        System.out.println("Motor startet...");
    }
}

class Auto {
    private Motor motor;
    private Radio radio;

    // Aufgabe: Implementiere die Konstruktor-Injektion
    public Auto(<Placeholder>Motor motor, Radio radio</Placeholder>) {
        this.motor = motor;
        this.radio = radio;
    }

    public void fahren() {
        radio.einschalten();
        motor.starten();
        System.out.println("Auto fährt los!");
    }
}

public class Main {
    public static void main(String[] args) {
        Motor m = new Motor();
        Radio r = new Radio();
        
        // Aufgabe: Injiziere die Abhängigkeiten
        Auto meinAuto = new Auto(<Placeholder>m, r</Placeholder>);
        meinAuto.fahren();
    }
}
```
---
