---
title: "Praxis: Domain-Modellierung mit POCO/POJO"
kategorie: "PraxisProjekte"
level: 1
---
# Projekt: Das Herz deiner App - Das Domain-Modell

Jede Anwendung braucht Datenmodelle, um reale Objekte abzubilden. In diesem Projekt erstellst du ein Modell für ein **Bankkonto**.

### Anforderungen:
1. **Identität:** Jedes Konto braucht eine IBAN (String).
2. **Zustand:** Ein Konto muss seinen Kontostand speichern (decimal in C#, double/BigDecimal in Java).
3. **Verhalten:** Das POCO/POJO selbst sollte keine Logik (wie Zinsberechnung) enthalten – dafür gibt es Services.

### Deine Aufgabe:
Wähle deine Sprache und vervollständige das Bank-Modell.
---
Modell eines Bankkontos (C# Beispiel)
---
```csharp
public class <Placeholder>Account</Placeholder>
{
    // Die Kontonummer
    public string <Placeholder>IBAN</Placeholder> { get; set; }

    // Der aktuelle Saldo
    public decimal <Placeholder>Balance</Placeholder> { get; set; }

    // Der Inhaber (POCO-Referenz)
    public User Owner { get; set; }
}
```
---
