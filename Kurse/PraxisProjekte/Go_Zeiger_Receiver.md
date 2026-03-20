---
title: "Praxis: Pointer Receiver in Go"
katgorie: "PraxisProjekte"
level: 2
---
In Go muss man Zeiger-Empfänger (Pointer Receivers) verwenden, wenn eine Methode das Originalobjekt verändern soll.

---
```go
package main

import "fmt"

type Auto struct {
    Marke string
    KM    int
}

// Methode mit Pointer-Receiver
func (a *Auto) Fahren(distanz int) {
    a.KM += distanz
}

func main() {
    meinAuto := Auto{Marke: "VW", KM: 1000}
    
    // Rufe Methode auf - Go kümmert sich um die Zeigerreferenz automatisch
    meinAuto.<Placeholder>Fahren</Placeholder>(500)
    
    fmt.Println("Kilometerstand:", meinAuto.KM)
}
```
---
