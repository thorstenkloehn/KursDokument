---
title: "Grundlagen der Lexikalischen Analyse"
kategorie: "Compilerbau"
level: 2
---

# Der Lexer (Scanner)

Die **lexikalische Analyse** ist die erste Phase eines Compilers. Ihre Aufgabe ist es, den flüssigen Quelltext (einen Stream von Zeichen) in eine Sequenz von logischen Einheiten, sogenannte **Tokens**, zu zerlegen.

### Warum ein Lexer?
Stellen Sie sich vor, Sie lesen diesen Satz. Ihr Gehirn gruppiert die Buchstaben automatisch zu Wörtern. Ein Compiler macht dasselbe:
- Er ignoriert Leerzeichen (Whitespace) und Kommentare.
- Er erkennt Schlüsselwörter (wie `if`, `while`).
- Er identifiziert Bezeichner (Variablennamen), Literale (Zahlen, Strings) und Operatoren (`+`, `==`).

### Funktionsweise
1. **Input:** Ein langer String aus dem Quellcode.
2. **Prozess:** Der Lexer scannt den Text von links nach rechts.
3. **Output:** Ein Stream von Token-Objekten.

Ein Token besteht meist aus einem **Typ** (z.B. `IDENTIFIER`) und einem **Wert** (z.B. `x`).

---

In dieser Übung schauen wir uns an, wie man einfache Zeichenketten in Tokens einteilt. Ein `Scanner` benötigt oft eine Methode, um das nächste Zeichen zu lesen und zu entscheiden, zu welchem Token es gehört.

---
```csharp
public enum TokenType {
    IDENTIFIER,
    NUMBER,
    ASSIGN,
    PLUS,
    SEMICOLON,
    EOF
}

public class Token {
    public TokenType Type { get; set; }
    public string Value { get; set; }
}
```
---
```csharp
// Vervollständigen Sie die Zuweisung des TokenTyps
public Token GetNextToken(char c) {
    if (char.IsLetter(c)) {
        return new Token { Type = TokenType.<Placeholder>IDENTIFIER</Placeholder>, Value = c.ToString() };
    } else if (char.IsDigit(c)) {
        return new Token { Type = TokenType.NUMBER, Value = c.ToString() };
    } else if (c == '=') {
        return new Token { Type = TokenType.<Placeholder>ASSIGN</Placeholder>, Value = "=" };
    }
    return null;
}
```
---
