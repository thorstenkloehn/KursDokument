---
title: "Projekt: BMI-Rechner"
kategorie: "PraxisProjekte"
level: 1
---
In diesem Projekt erstellen wir einen einfachen Body-Mass-Index (BMI) Rechner. Wir nutzen Variablen für das Gewicht und die Größe und berechnen daraus den BMI-Wert.

### Formel:
`BMI = Gewicht / (Größe * Größe)`

### Lernziele:
- Mathematische Operatoren (`/`, `*`)
- Bedingte Anweisungen (`if`, `elif`, `else`)
- Typ-Konvertierung

---
Berechne den BMI und prüfe, ob das Gewicht im Normalbereich (18.5 - 25) liegt.
---
```python
gewicht = 75  # kg
groesse = 1.80 # meter

# Berechne den BMI
bmi = gewicht / (<Placeholder>groesse * groesse</Placeholder>)

print("Dein BMI ist: " + str(round(bmi, 2)))

if bmi < 18.5:
    print("Untergewicht")
<Placeholder>elif</Placeholder> bmi <= 25:
    print("Normalgewicht")
else:
    print("Übergewicht")
```
---
