---
title: "Praxis: Mutables Borrowing in Rust"
katgorie: "PraxisProjekte"
level: 2
---
In Rust erlaubt `&mut`, einen Wert zu verändern, ohne das Ownership (Besitzrecht) zu übernehmen. Dies verhindert Datenrennen (Data Races) zur Kompilierzeit.

---
```rust
fn verdopple_wert(zahl: <Placeholder>&mut i32</Placeholder>) {
    *zahl *= 2;
}

fn main() {
    let mut wert = 100;
    
    // Wir übergeben eine veränderliche Referenz
    verdopple_wert(<Placeholder>&mut wert</Placeholder>);
    
    println!("Der neue Wert ist: {}", wert);
}
```
---
