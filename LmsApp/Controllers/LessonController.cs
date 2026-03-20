using Microsoft.AspNetCore.Mvc;
using LmsApp.Services;

namespace LmsApp.Controllers;

public class LessonController : Controller
{
    private readonly LessonService _lessonService;

    public LessonController(LessonService lessonService)
    {
        _lessonService = lessonService;
    }

    public async Task<IActionResult> Index()
    {
        var lessons = await _lessonService.GetAllLessonsAsync();
        return View(lessons.OrderBy(l => l.Level).ToList());
    }

    public async Task<IActionResult> Details(string id)
    {
        var lessons = await _lessonService.GetAllLessonsAsync();
        var lesson = lessons.FirstOrDefault(l => l.Id == id);
        
        if (lesson == null) return NotFound();

        var currentIndex = lessons.FindIndex(l => l.Id == id);
        string? nextLessonId = null;
        if (currentIndex >= 0 && currentIndex < lessons.Count - 1)
        {
            nextLessonId = lessons[currentIndex + 1].Id;
        }

        ViewBag.NextLessonId = nextLessonId;
        return View(lesson);
    }
}
