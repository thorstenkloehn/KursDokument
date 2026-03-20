---
title: "Kontrollstrukturen in Rust"
kategorie: "Rust Grundlagen"
level: 1
---
Rust verwendet `if` und `else`. Ein wichtiger Punkt ist, dass `if` ein Ausdruck ist und einen Wert zurückgeben kann.

---
Codebeispiele
---
```rust
fn main() {
    let zahl = 10;
    
    // Bedingung ohne Klammern
    if zahl > 5 {
        println!("Größer als 5");
    } <Placeholder>else</Placeholder> {
        println!("Kleiner oder gleich 5");
    }
    
    // if als Ausdruck (Expression)
    let ergebnis = <Placeholder>if</Placeholder> zahl == 10 { "Zehn" } else { "Nicht Zehn" };
    println!("{}", ergebnis);
}
```
---
