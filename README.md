# LMS-Plattform (Learning Management System)

Eine interaktive Lernplattform für moderne Softwareentwicklung mit Fokus auf verschiedene Programmiersprachen wie C#, Java, Go, Rust und C++. Die Plattform bietet interaktive Code-Übungen im Monaco Editor mit automatischer Verifizierung und IntelliSense-Unterstützung.

## Voraussetzungen

Stellen Sie sicher, dass die folgenden Komponenten auf Ihrem System installiert sind:

- **.NET 10 SDK**: Für das ASP.NET Core Backend.
- **Node.js (v18+) & npm**: Für den LSP-Proxy und die VS Code Extension.
- **Sprachserver (für LSP Support)**:
  - `clangd`: Für C/C++ Support.
  - `gopls`: Für Go Support.
  - `rust-analyzer`: Für Rust Support.
  - `typescript-language-server`: Für TS/JS Support.

## Installation

### 1. Repository klonen
```bash
git clone <repository-url>
cd KursDokument
```

### 2. Backend (LmsApp) einrichten
Das Backend basiert auf ASP.NET Core 10.
```bash
cd LmsApp
dotnet restore
dotnet build
```

### 3. LSP Proxy (LspProxy) einrichten
Der LSP-Proxy ermöglicht Sprachunterstützung (IntelliSense) im Web-Editor über WebSockets.
```bash
cd ../LspProxy
npm install
```

### 4. VS Code Extension einrichten
Die Extension hilft beim Erstellen und Verwalten von Kurs-Lektionen direkt in VS Code.
```bash
cd ../Extension
npm install
npm run compile
```

## Starten der Anwendung

### Backend starten
```bash
cd LmsApp
dotnet run
```
Die Anwendung ist unter [http://localhost:5232](http://localhost:5232) erreichbar.

### LSP Proxy starten
Der Proxy muss laufen, damit der Monaco Editor im Browser Autovervollständigung bietet.
```bash
cd LspProxy
node server.js
```

## Funktionsweise

- **Markdown-Parsing**: Der `LessonService` in der `LmsApp` parst Lektionen aus dem Ordner `Kurse/`.
- **Interaktive Übungen**: In der Markdown-Datei werden Übungen mit `<Placeholder>ErwarteterWert</Placeholder>` definiert. Der Monaco Editor zeigt diese als `___` an.
- **Gemini CLI Tutor**: Ein integrierter KI-Assistent, der die installierte `gemini` CLI nutzt. Er gibt kontextsensitive Tipps zum aktuellen Code und zum Lektionstext, ohne die Lösung direkt zu verraten.
- **Anki-System (Spaced Repetition)**: Nach jeder erfolgreichen Übung kann ein Wiederholungs-Intervall (Nochmal, Schwer, Gut, Einfach) gewählt werden. Das Dashboard markiert fällige Aufgaben automatisch als "Wiederholung erforderlich".
- **Verifizierung**: Die `VerificationController` API prüft die Benutzereingaben. Aktuell erfolgt dies durch einen einfachen String-Inhalt-Abgleich.
- **IntelliSense**: Der `LspProxy` leitet LSP-Nachrichten vom Monaco Editor an die installierten nativen Sprachserver weiter.

## Projektstruktur

- **LmsApp/**: Das ASP.NET Core Web-Projekt (MVC). Enthält Services für Lektionen und Controller für die Anzeige.
- **Kurse/**: Enthält alle Lektionen als Markdown-Dateien (.md), kategorisiert in Unterordnern.
- **LspProxy/**: Node.js WebSocket-Proxy für Language Server Protokolle.
- **Extension/**: VS Code Extension mit Snippets und Tools für Kurs-Autoren.
- **GEMINI.md**: Detaillierte technische Dokumentation der Architektur.

## Kurse erstellen

Lektionen werden im Ordner `Kurse/` abgelegt. Jede Datei besteht aus drei durch `---` getrennten Sektionen:

1. **YAML-Metadaten**:
   ```yaml
   ---
   title: "Mein Kurs"
   kategorie: "Kategorie"
   level: 1
   ---
   ```
2. **Lerninhalte**: Markdown-Text zur Erklärung des Themas.
3. **Codebeispiel**: Ein Code-Block mit Platzhaltern:
   ```csharp
   Console.<Placeholder>WriteLine</Placeholder>("Test");
   ```

Alle Dateien müssen in **UTF-8** gespeichert werden.
