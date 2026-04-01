# LMS-Plattform (Learning Management System)
Interaktive Lernplattform mit praxisbezogener Code-Analyse und Fokus auf moderne Softwareentwicklung.

## Technische Umsetzung
### Backend
- **Framework**: ASP.NET Core 10 (C#)
- **Analyse**: Dynamische Code-Verifizierung (aktuell via String-Inhalt-Vergleich, geplant: Roslyn/Sandboxed Execution).
- **Service**: `LessonService.cs` parst Markdown-Dateien mit YAML-Frontmatter und Trennung durch `---`.
- **API**: `VerificationController.cs` prüft Benutzer-Eingaben gegen die erwarteten Platzhalter-Werte.

### Frontend
- **UI**: Bootstrap 5 für responsives Design.
- **Editor**: Monaco Editor (VS Code Kern) für interaktive Übungen.
- **Rendering**: Markdig für Markdown-Inhalte.
- **LSP Support**: Syntax-Highlighting und IntelliSense via WebSocket-Proxy.

### LSP Proxy (LspProxy)
- **Technologie**: Node.js mit `vscode-ws-jsonrpc`.
- **Funktion**: Leitet WebSocket-Anfragen vom Web-Editor an native Language Server weiter.
- **Unterstützte Sprachen**:
  - `clangd` (C/C++)
  - `gopls` (Go)
  - `rust-analyzer` (Rust)
  - `typescript-language-server` (TS/JS/CSS/HTML)

### KI-Unterstützung (Gemini CLI Tutor)
- **Integration**: `ChatController.cs` nutzt die installierte **Gemini CLI** (`gemini -p "..."`), um kontextbezogene Antworten zu generieren.
- **Kontext**: Der Tutor erhält den Titel, den Inhalt der Lektion und den aktuellen Code aus dem Editor als System-Prompt.
- **Funktion**: Hilft Studenten bei Problemen, ohne die Lösung direkt zu verraten (Tutor-Modus).

### Wiederholungssystem (Anki-Style SRS)
- **Logik**: Spaced Repetition System (SRS) zur Festigung von Lerninhalten.
- **Speicherung**: Nutzt Cookies (`lms_review_[id]`), um den nächsten Wiederholungszeitpunkt zu speichern.
- **Intervalle**: 
  - *Nochmal*: +1 Minute
  - *Schwer*: +1 Tag
  - *Gut*: +4 Tage
  - *Einfach*: +7 Tage
- **Visualisierung**: Das Dashboard markiert fällige Lektionen automatisch gelb und zeigt ein Wecker-Symbol.

### Fortschritts-Verwaltung
- **Einzel-Reset**: `Details.cshtml` bietet einen Button zum Zurücksetzen einer einzelnen Aufgabe (löscht Cookies und stellt Start-Code wieder her).
- **Globaler Reset**: `Index.cshtml` ermöglicht das Löschen des gesamten Fortschritts (alle `lms_done_` und `lms_review_` Cookies).

## Kurs-Struktur & Schwierigkeitsstufen
Die Lektionen sind in drei Schwierigkeitsstufen (Level) unterteilt:
1. **Leicht (Green)**: Grundlagen wie Variablen und Kontrollstrukturen.
2. **Mittel (Yellow)**: Fortgeschrittene Konzepte (DI, HTTP, CLI-Tools, JavaScript).
3. **Schwer (Red)**: Komplexe Frameworks (ASP.NET Core MVC, Spring Boot 4).

### Verfügbare Kurs-Verzeichnisse:
- **CsharpGrundlagen**: C# Basiswissen (Level 1).
- **JavaGrundlagen**: Java Basiswissen (Level 1).
- **AspNetCoreHttp**: HTTP-Grundlagen in ASP.NET Core (Level 2).
- **AspNetCoreMvc**: Webentwicklung mit MVC (Level 3).
- **SpringBoot4**: Java Enterprise Entwicklung (Level 3).
- **CGrundlagen**: C Programmierung (Level 1).
- **CplusplusGrundlagen**: C++ Programmierung (Level 1-2).
- **GolangGrundlagen**: Go Programmierung (Level 1-2).
- **RustGrundlagen**: Rust Programmierung (Level 1-2).
- **Compilerbau**: Grundlagen der Lexik und Parser (Level 2).
- **PraxisProjekte**: Reale Anwendungsbeispiele in verschiedenen Sprachen (Level 1-3).

## Erstellung von Lerninhalten (Markdown)
Lektionen werden als `.md` Dateien im Ordner `Kurse/` gespeichert.

### Metadaten (YAML-Frontmatter):
```markdown
---
title: "Titel der Lektion"
kategorie: "Kursname"
level: 1  # 1=Leicht, 2=Mittel, 3=Schwer
---
Lerninhalte (Markdown)...
---
Codebeispiele
---
```csharp
// Beispiel mit Platzhalter
int <Placeholder>zahl</Placeholder> = 10;
```
---
```

### Wichtige Hinweise:
- **Kodierung**: Alle Dateien müssen als **UTF-8** gespeichert werden.
- **Eindeutigkeit**: IDs werden automatisch aus `[Ordner]-[Dateiname]` generiert.
- **Platzhalter**: Werden in Monaco als `___` angezeigt und bei der Verifizierung gegen den `ExpectedValue` geprüft.
- **Dateipfade**: Die App sucht Kurse relativ zum ContentRoot im Ordner `../Kurse`.
