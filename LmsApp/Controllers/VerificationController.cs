using Microsoft.AspNetCore.Mvc;

namespace LmsApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VerificationController : ControllerBase
{
    [HttpPost("check")]
    public IActionResult CheckCode([FromBody] CodeCheckRequest request)
    {
        // Simple verification for now. 
        // In a real local scenario, we'd use Roslyn or save to a local .csproj and run dotnet build.
        
        var isCorrect = true;
        foreach(var p in request.ExpectedValues)
        {
            if (!request.Code.Contains(p))
            {
                isCorrect = false;
                break;
            }
        }

        if (isCorrect)
        {
            return Ok(new { success = true, message = "Perfekt! Alle Platzhalter sind korrekt ausgefüllt." });
        }
        else
        {
            return Ok(new { success = false, message = "Leider nicht ganz richtig. Überprüfe deinen Code noch einmal." });
        }
    }
}

public class CodeCheckRequest
{
    public string Code { get; set; } = string.Empty;
    public List<string> ExpectedValues { get; set; } = new();
}
