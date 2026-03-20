---
title: "Kontrollstrukturen in Go"
kategorie: "Golang Grundlagen"
level: 1
---
Go verwendet `if`, `for` und `switch`. Eine Besonderheit ist, dass Go nur eine einzige Schleife hat: `for`.

---
Codebeispiele
---
```go
package main
import "fmt"

func main() {
    zahl := 10
    
    // Bedingte Anweisung ohne Klammern
    if zahl > 5 {
        fmt.Println("Größer als 5")
    } <Placeholder>else</Placeholder> {
        fmt.Println("Kleiner oder gleich 5")
    }
    
    // Eine einfache for-Schleife
    for <Placeholder>i</Placeholder> := 0; i < 3; i++ {
        fmt.Println(i)
    }
}
```
---
