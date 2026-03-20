---
title: "Referenzen in Rust"
katgorie: "Rust Grundlagen"
level: 1
---
In Rust sind Referenzen Teil des **Borrowing**-Konzepts. Man "leiht" sich einen Wert aus, ohne ihn zu besitzen (Ownership).

- `&x`: Eine unveränderliche Referenz.
- `&mut x`: Eine veränderliche Referenz (nur eine pro Scope möglich).

Referenzen sind in Rust immer sicher, da der Compiler garantiert, dass sie nie auf ungültigen Speicher zeigen.

---
```rust
fn main() {
    let mut zahl = 10;
    
    // Eine veränderliche Referenz auf zahl erstellen
    let <Placeholder>ref_zahl</Placeholder> = &mut zahl;
    
    // Den Wert über die Referenz ändern
    *<Placeholder>ref_zahl</Placeholder> += 5;
    
    println!("Zahl ist nun: {}", zahl);
}
```
---
