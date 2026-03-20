---
title: "Variablen in Rust"
kategorie: "Rust Grundlagen"
level: 1
---
In Rust sind Variablen standardmäßig unveränderlich (immutable). Um eine Variable veränderbar zu machen, musst du `mut` verwenden.

---
Codebeispiele
---
```rust
fn main() {
    // Unveränderliche Variable
    let name = "LMS";
    
    // Veränderliche Variable mit mut
    let <Placeholder>mut</Placeholder> alter = 25;
    
    alter = 26;
    
    println!("Name: {}, Alter: {}", name, alter);
}
```
---
