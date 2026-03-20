---
title: "Variable Shadowing in Rust"
katgorie: "Rust Grundlagen"
level: 1
---
In Rust erlaubt **Shadowing**, eine neue Variable mit demselben Namen wie eine vorherige Variable zu deklarieren. Die neue Variable "überschattet" die alte.

Dies ist nützlich, um:
- Den Typ einer Variable zu ändern (z.B. von `String` zu `usize`).
- Eine Variable nach einer Transformation wieder unveränderlich (`immutable`) zu machen.

---
```rust
fn main() {
    let punkte = "42"; // Typ: &str
    
    // Shadowing: Wir wandeln den String in eine Zahl um
    let <Placeholder>punkte</Placeholder>: i32 = punkte.parse().expect("Keine Zahl");
    
    // Hier ist 'punkte' jetzt ein i32
    println!("Punkte als Zahl: {}", punkte + 10);
    
    {
        // Shadowing in einem inneren Scope
        let <Placeholder>punkte</Placeholder> = 100;
        println!("Innerer Scope: {}", punkte);
    }
    
    println!("Äußerer Scope: {}", punkte);
}
```
---
