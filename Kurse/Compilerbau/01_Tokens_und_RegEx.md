---
title: "Tokens und Reguläre Ausdrücke"
kategorie: "Compilerbau"
level: 2
---

# Token-Definition mit RegEx

Lexer nutzen oft **Reguläre Ausdrücke (RegEx)**, um Muster für verschiedene Token-Typen zu definieren.

### Typische Muster
- **IDENTIFIER:** `[a-zA-Z_][a-zA-Z0-9_]*` (Beginnt mit Buchstabe, dann Buchstaben oder Ziffern)
- **NUMBER:** `[0-9]+` (Eine oder mehrere Ziffern)
- **WHITESPACE:** `[ \t\n\r]+` (Wird meist ignoriert)

### Priorität
Ein wichtiges Problem beim Lexing ist die Mehrdeutigkeit. Wenn ein Lexer das Wort `if` sieht, könnte es ein `IDENTIFIER` (Variable namens "if") oder das Schlüsselwort `IF` sein.
**Regel:** Schlüsselwörter haben in der Regel eine höhere Priorität als allgemeine Bezeichner.

---

In dieser Übung definieren wir die regulären Ausdrücke für einen sehr einfachen Lexer in C#.

---
```csharp
using System.Text.RegularExpressions;

public class TokenDefinition {
    public Regex Pattern { get; set; }
    public string TokenType { get; set; }
}
```
---
```csharp
// Definieren Sie das RegEx-Muster für Bezeichner und Zahlen
var definitions = new List<TokenDefinition> {
    new TokenDefinition {
        TokenType = "NUMBER",
        Pattern = new Regex(@"^\d+")
    },
    new TokenDefinition {
        TokenType = "IDENTIFIER",
        Pattern = new Regex(@"^<Placeholder>[a-zA-Z_][a-zA-Z0-9_]*</Placeholder>")
    },
    new TokenDefinition {
        TokenType = "ASSIGN",
        Pattern = new Regex(@"^<Placeholder>=</Placeholder>")
    }
};
```
---
