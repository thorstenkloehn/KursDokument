---
title: "REST Controller in Spring Boot 4"
kategorie: "SpringBoot 4"
level: 3
---
Ein REST-Controller in Spring Boot verarbeitet HTTP-Anfragen (GET, POST, etc.) und gibt Daten im JSON-Format zurück. 

### Annotationen:
- **@RestController**: Markiert die Klasse als Controller.
- **@GetMapping**: Definiert einen Endpunkt für GET-Anfragen.
- **@PathVariable**: Extrahiert Variablen aus dem URL-Pfad.
---
Codebeispiele
---
```java
import org.springframework.web.bind.annotation.*;

@<Placeholder>RestController</Placeholder>
@RequestMapping("/api/greetings")
public class GreetingController {

    @<Placeholder>GetMapping</Placeholder>("/{name}")
    public String greet(@PathVariable String name) {
        return "Hallo " + <Placeholder>name</Placeholder> + "!";
    }
}
```
---
