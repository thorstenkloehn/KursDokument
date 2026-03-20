---
title: "Hello World in Spring Boot"
kategorie: "SpringBoot 4"
level: 1
---
Ein `@RestController` liefert Strings direkt an den Client zurück.

---
Codebeispiele
---
```java
import org.springframework.web.bind.annotation.*;

@<Placeholder>RestController</Placeholder>
public class HelloController {
    
    @<Placeholder>GetMapping</Placeholder>("/")
    public String index() {
        return "Hello World!";
    }
}
```
---
