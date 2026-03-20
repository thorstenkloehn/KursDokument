using System.Text.RegularExpressions;
using LmsApp.Models;
using YamlDotNet.Serialization;
using YamlDotNet.Serialization.NamingConventions;

namespace LmsApp.Services;

public class LessonService
{
    private readonly string _lessonsPath;
    private readonly IDeserializer _yamlDeserializer;

    public LessonService(IWebHostEnvironment env)
    {
        _lessonsPath = Path.Combine(env.ContentRootPath, "..", "Kurse");
        _yamlDeserializer = new DeserializerBuilder()
            .WithNamingConvention(CamelCaseNamingConvention.Instance)
            .IgnoreUnmatchedProperties()
            .Build();
    }

    public async Task<List<Lesson>> GetAllLessonsAsync()
    {
        var lessons = new List<Lesson>();
        if (!Directory.Exists(_lessonsPath)) return lessons;

        var files = Directory.GetFiles(_lessonsPath, "*.md", SearchOption.AllDirectories);
        foreach (var file in files)
        {
            lessons.Add(await ParseLessonAsync(file));
        }
        return lessons;
    }

    private string GetUniqueId(string filePath)
    {
        var course = Path.GetFileName(Path.GetDirectoryName(filePath)) ?? "Allgemein";
        var fileName = Path.GetFileNameWithoutExtension(filePath);
        return $"{course}-{fileName}";
    }

    public async Task<Lesson?> GetLessonByIdAsync(string id)
    {
        var files = Directory.GetFiles(_lessonsPath, "*.md", SearchOption.AllDirectories);
        var file = files.FirstOrDefault(f => GetUniqueId(f) == id);
        if (file == null) return null;

        return await ParseLessonAsync(file);
    }

    private async Task<Lesson> ParseLessonAsync(string filePath)
    {
        var text = await File.ReadAllTextAsync(filePath, System.Text.Encoding.UTF8);
        var parts = text.Split("---", StringSplitOptions.RemoveEmptyEntries);
        var uniqueId = GetUniqueId(filePath);

        if (parts.Length < 3) return new Lesson { Id = uniqueId };

        var metadataYaml = parts[0];
        var metadata = _yamlDeserializer.Deserialize<Dictionary<string, string>>(metadataYaml) ?? new Dictionary<string, string>();

        var content = parts.Length > 1 ? parts[1].Trim() : "";
        
        // Find the first part that contains a code block (starting with ```)
        var codePart = "";
        for (int i = 2; i < parts.Length; i++)
        {
            if (parts[i].Contains("```"))
            {
                codePart = parts[i].Trim();
                break;
            }
        }

        // Extract code from block
        var language = "csharp";
        var codeMatch = Regex.Match(codePart, @"```(\w+)?\s*([\s\S]*?)\s*```");
        var rawCode = codePart;

        if (codeMatch.Success)
        {
            if (codeMatch.Groups[1].Success && !string.IsNullOrEmpty(codeMatch.Groups[1].Value))
            {
                language = codeMatch.Groups[1].Value;
            }
            rawCode = codeMatch.Groups[2].Value;
        }

        // Extract placeholders
        var placeholderRegex = new Regex(@"<Placeholder>(.*?)</Placeholder>");

        var lesson = new Lesson
        {
            Id = uniqueId,
            Title = metadata.GetValueOrDefault("title", "Unbenannt"),
            Category = metadata.ContainsKey("kategorie") ? metadata["kategorie"] : metadata.GetValueOrDefault("katgorie", "Allgemein"),
            Course = Path.GetFileName(Path.GetDirectoryName(filePath)) ?? "Allgemein",
            Content = content,
            CodeExample = rawCode,
            SolutionCode = placeholderRegex.Replace(rawCode, m => m.Groups[1].Value),
            Language = language
        };

        // Parse difficulty level
        if (metadata.TryGetValue("level", out var levelStr) && int.TryParse(levelStr, out var level))
        {
            lesson.Level = level;
        }
        else
        {
            // Default levels based on course
            lesson.Level = lesson.Course switch
            {
                "CsharpGrundlagen" or "JavaGrundlagen" => 1,
                "JavascriptBrowser" or "AspNetCoreHttp" => 2,
                _ => 3
            };
        }

        var matches = placeholderRegex.Matches(rawCode);
        
        int offset = 0;
        foreach (Match match in matches)
        {
            lesson.Placeholders.Add(new CodePlaceholder
            {
                Id = $"p{lesson.Placeholders.Count}",
                ExpectedValue = match.Groups[1].Value,
                StartIndex = match.Index - offset,
                Length = match.Groups[1].Length
            });
            // We'll replace the placeholder in CodeExample with a fixed marker or spaces
            // For now, let's keep the raw code but provide the placeholders info
        }

        // Replace placeholders with empty markers for Monaco
        lesson.CodeExample = placeholderRegex.Replace(rawCode, m => "___");

        return lesson;
    }
}
