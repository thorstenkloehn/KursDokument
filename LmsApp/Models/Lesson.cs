namespace LmsApp.Models;

public class Lesson
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string Course { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public string CodeExample { get; set; } = string.Empty;
    public string SolutionCode { get; set; } = string.Empty;
    public string Language { get; set; } = "csharp";
    public int Level { get; set; } = 1; // 1 = Leicht, 2 = Mittel, 3 = Schwer
    public List<CodePlaceholder> Placeholders { get; set; } = new();
}

public class CodePlaceholder
{
    public string Id { get; set; } = string.Empty;
    public string ExpectedValue { get; set; } = string.Empty;
    public int StartIndex { get; set; }
    public int Length { get; set; }
}
