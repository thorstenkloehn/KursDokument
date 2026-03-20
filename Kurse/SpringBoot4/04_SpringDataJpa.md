---
title: "Spring Data JPA & Repositories"
kategorie: "SpringBoot 4"
level: 3
---
Spring Data JPA macht Datenbank-Operationen unglaublich einfach. Mit dem Interface `JpaRepository` erhältst du automatisch CRUD-Funktionen ohne eine einzige SQL-Zeile zu schreiben.

### Annotationen:
- **@Entity**: Markiert eine Klasse als Datenbank-Tabelle.
- **@Id**: Definiert den Primärschlüssel.
- **JpaRepository<Entity, Type>**: Das Interface für alle Operationen.
---
Codebeispiele
---
```java
import jakarta.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;

@<Placeholder>Entity</Placeholder>
public class Student {
    @<Placeholder>Id</Placeholder>
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
}

// Spring generiert die Implementierung zur Laufzeit
public interface StudentRepository extends <Placeholder>JpaRepository</Placeholder><Student, Long> {
    // Custom Query Method
    Student findByName(String name);
}
```
---
