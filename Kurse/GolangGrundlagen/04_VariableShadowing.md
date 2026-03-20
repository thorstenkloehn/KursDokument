---
title: "Shadowing in Go"
katgorie: "Golang Grundlagen"
level: 2
---
Shadowing tritt in Go häufig auf, wenn man eine Variable mit dem `:=` Operator in einem inneren Scope (z.B. in einem `if`-Block) neu deklariert.

**Achtung:** Dies kann zu Fehlern führen, wenn man eigentlich die äußere Variable aktualisieren wollte.

---
```go
package main

import "fmt"

func main() {
	x := 10
	fmt.Println("Vorher x:", x)

	if true {
		// Neues 'x' wird deklariert, das äußere 'x' überschattet
		<Placeholder>x</Placeholder> := 20
		fmt.Println("Inneres x:", <Placeholder>x</Placeholder>)
	}

	fmt.Println("Nachher x:", x) // Ausgabe ist weiterhin 10!
}
```
---
