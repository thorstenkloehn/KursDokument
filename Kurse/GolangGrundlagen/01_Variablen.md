---
title: "Variablen in Go"
kategorie: "Golang Grundlagen"
level: 1
---
In Go werden Variablen mit dem Schlüsselwort `var` oder der Kurzschreibweise `:=` deklariert. Go ist statisch typisiert, kann aber Typen oft selbst ableiten.

---
Codebeispiele
---
```go
package main
import "fmt"

func main() {
    // Deklaration mit explizitem Typ
    var name string = "LMS"
    
    // Kurzschreibweise (Type Inference)
    alter <Placeholder>:=</Placeholder> 25
    
    fmt.Println(name, alter)
}
```
---
