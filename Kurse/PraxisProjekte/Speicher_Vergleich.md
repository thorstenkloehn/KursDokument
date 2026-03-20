---
title: "Speicherkonzepte im Vergleich"
kategorie: "PraxisProjekte"
level: 2
---
Jede Programmiersprache nutzt **Stack** und **Heap**, aber die Art der Verwaltung unterscheidet sich fundamental.

### 1. C (Manuell)
In C musst du Speicher auf dem Heap selbst reservieren (`malloc`) und wieder freigeben (`free`). Vergisst du das, entsteht ein **Memory Leak**.

### 2. Java / C# (Automatisch - GC)
Hier kümmert sich der **Garbage Collector** um den Heap. Das ist sicher, verbraucht aber etwas mehr CPU-Leistung für die Verwaltung.

### 3. Rust (Ownership)
Rust nutzt ein System von "Besitzrechten". Wenn die Variable, der der Speicher gehört, den Gültigkeitsbereich verlässt, wird der Speicher sofort freigegeben – ohne Garbage Collector und ohne manuelles `free`.

---
Wähle die richtigen Befehle für die Speicherverwaltung aus.
---
```c
// C-Beispiel: Manuelle Verwaltung
int* zahlen = (int*)malloc(10 * sizeof(int));
// ... Nutzung ...
<Placeholder>free</Placeholder>(zahlen); // Speicher freigeben

// C#-Beispiel: Statische Variable
class Counter {
    public <Placeholder>static</Placeholder> int count = 0;
}

// Rust-Beispiel: Speicher gehört der Variable 's'
{
    let s = String::from("Hallo"); 
} // Hier wird 's' automatisch gelöscht (Drop)
```
---
