---
title: "Lexer Implementierung"
kategorie: "Compilerbau"
level: 2
---

# Der Lexing-Loop

Ein Lexer arbeitet meistens in einer Schleife:
1. Prüfe, ob noch Zeichen vorhanden sind.
2. Überspringe Whitespace.
3. Finde das am besten passende Token-Muster am Anfang des verbleibenden Strings.
4. Schneide den erkannten Teil des Strings ab und wiederhole den Vorgang.

### Beispiel
Eingabe: `int x = 5;`
- Token 1: `int` (KEYWORD)
- Token 2: `x` (IDENTIFIER)
- Token 3: `=` (ASSIGN)
- Token 4: `5` (NUMBER)
- Token 5: `;` (SEMICOLON)

---

In dieser Übung vervollständigen wir die `Next()`-Methode eines Lexers, die einen Teilstring extrahiert.

---
```csharp
public class Lexer {
    private string _source;
    private int _position = 0;

    public Lexer(string source) {
        _source = source;
    }

    private char Current => _position < _source.Length ? _source[_position] : '\0';
}
```
---
```csharp
// Implementieren Sie die Logik zum Vorrücken der Position
public string ReadIdentifier() {
    int start = _position;
    while (char.IsLetter(Current)) {
        <Placeholder>_position++</Placeholder>;
    }
    return _source.Substring(start, <Placeholder>_position - start</Placeholder>);
}

public void SkipWhitespace() {
    while (char.<Placeholder>IsWhiteSpace</Placeholder>(Current)) {
        _position++;
    }
}
```
---
