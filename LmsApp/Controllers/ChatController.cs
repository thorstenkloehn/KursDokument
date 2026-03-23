using Microsoft.AspNetCore.Mvc;

namespace LmsApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ChatController : ControllerBase
{
    [HttpPost("ask")]
    public IActionResult Ask([FromBody] ChatRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Message))
        {
            return BadRequest("Nachricht darf nicht leer sein.");
        }

        // Simuliere eine Gemini-Antwort basierend auf dem Kontext der Lektion
        string responseText = GenerateGeminiResponse(request);

        return Ok(new { response = responseText });
    }

    private string GenerateGeminiResponse(ChatRequest request)
    {
        try
        {
            string prompt = $"Du bist ein Tutor für eine LMS-Plattform. " +
                            $"Der Nutzer arbeitet an der Lektion '{request.LessonTitle}'. " +
                            $"Inhalt der Lektion: {request.LessonContent}\n" +
                            $"Aktueller Code im Editor:\n```\n{request.CurrentCode}\n```\n" +
                            $"Nutzer fragt: {request.Message}\n" +
                            $"Antworte kurz und hilfreich auf Deutsch. Gib keine direkte Gesamtlösung, sondern führe den Nutzer zur Lösung.";

            var processInfo = new System.Diagnostics.ProcessStartInfo
            {
                FileName = "gemini",
                Arguments = $"-p \"{prompt.Replace("\"", "\\\"")}\"",
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true,
            };

            using var process = System.Diagnostics.Process.Start(processInfo);
            if (process == null) return "Fehler: Gemini CLI konnte nicht gestartet werden.";

            string output = process.StandardOutput.ReadToEnd();
            string error = process.StandardError.ReadToEnd();
            process.WaitForExit();

            if (!string.IsNullOrEmpty(output))
            {
                // Bereinige "Loaded cached credentials" falls vorhanden
                output = output.Replace("Loaded cached credentials.", "").Trim();
                return output;
            }

            return !string.IsNullOrEmpty(error) ? $"Fehler: {error}" : "Keine Antwort von Gemini erhalten.";
        }
        catch (Exception ex)
        {
            return $"Interner Fehler beim Aufruf der Gemini CLI: {ex.Message}";
        }
    }
}

public class ChatRequest
{
    public string Message { get; set; } = string.Empty;
    public string? LessonTitle { get; set; }
    public string? LessonContent { get; set; }
    public string? CurrentCode { get; set; }
}
