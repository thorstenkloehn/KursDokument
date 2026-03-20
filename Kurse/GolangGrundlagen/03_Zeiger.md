---
title: "Zeiger in Go"
katgorie: "Golang Grundlagen"
level: 1
---
In Go werden Zeiger verwendet, um Daten effizient an Funktionen zu übergeben (Call by Reference statt Call by Value) oder um Änderungen an Strukturen vorzunehmen.

- `&x` liefert einen Zeiger auf x.
- `*ptr` dereferenziert den Zeiger, um auf den Wert zuzugreifen.

---
```go
package main

import "fmt"

func main() {
	var zahl int = 100
	
	// Zeiger auf zahl erstellen
	var <Placeholder>ptr</Placeholder> *int = &zahl
	
	// Den Wert über den Zeiger ändern
	*<Placeholder>ptr</Placeholder> = 200
	
	fmt.Println("Zahl ist nun:", zahl)
}
```
---
