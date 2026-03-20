---
title: "Praxisübung: Warenkorb"
kategorie: "TypeScript Grundlagen"
level: 2
---
In dieser Praxisübung erstellen wir eine Datenstruktur für einen einfachen Warenkorb. Wir nutzen **Interfaces**, um festzulegen, wie ein Produkt (Produkt-Objekt) aussehen muss.

### Konzepte:
1. **interface:** Definiert die Form eines Objekts (z. B. id, name, preis).
2. **Array von Objekten:** Speichert mehrere Instanzen, die dem Interface entsprechen.
3. **Funktionen mit Typen:** Parameter und Rückgabewerte werden typisiert.

---
Vervollständige das Interface 'Produkt' und die Funktion zum Berechnen der Summe.
---
```typescript
// Definition der Struktur für ein Produkt
<Placeholder>interface</Placeholder> Produkt {
    id: number;
    name: string;
    preis: number;
}

const meinWarenkorb: Produkt[] = [
    { id: 1, name: "Laptop", preis: 999 },
    { id: 2, name: "Maus", preis: 25 }
];

// Funktion mit Parameter- und Rückgabetyp
function berechneGesamtpreis(produkte: <Placeholder>Produkt[]</Placeholder>): number {
    let summe = 0;
    produkte.forEach(p => summe += p.preis);
    return summe;
}

const gesamt = berechneGesamtpreis(meinWarenkorb);
console.log(`Gesamtpreis: ${gesamt} Euro.`);
```
---
