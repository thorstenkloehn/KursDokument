---
title: "Dependency Injection in Spring Boot"
kategorie: "SpringBoot 4"
level: 3
---
Spring Framework ist berühmt für seine Inversion of Control (IoC). Mit Annotationen wie `@Service` und `@Autowired` (oder Constructor Injection) steuert Spring die Lebenszyklen deiner Objekte.

### Best Practices:
- Verwende **Constructor Injection** anstelle von Field Injection (@Autowired an der Variable).
- Trenne die Logik in Services (`@Service`).
---
Codebeispiele
---
```java
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@<Placeholder>Service</Placeholder>
public class CourseService {
    public String getCourseInfo() {
        return "Spring Framework 7 / Spring Boot 4";
    }
}

@RestController
public class CourseController {
    private final CourseService service;

    // Constructor Injection
    public CourseController(<Placeholder>CourseService</Placeholder> service) {
        this.service = service;
    }
}
```
---
