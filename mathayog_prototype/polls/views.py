from django.shortcuts import render
from django.http import HttpResponse
from .models import Question


intro = """One advantage of using a kite sail is that it flies at a height of 150m. There, the wind speed is approximately 25% higher than down on the deck of the ship.
\n\n
At what approximate speed does the wind blow into a kite sail when a wind speed of 24 km/h is measured on the deck of the ship?"""

feedback = [
    "Vestibulum dignissim nibh eget felis vehicula pellentesque.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Maecenas varius erat quis dui semper feugiat.",
    "Nulla in lorem eget augue dictum varius ut cursus massa.",
    "Etiam ullamcorper libero nec velit volutpat posuere.",
    "Aenean at eros in erat venenatis accumsan eu non neque."
]

followups = [
    "What do tankers, container ships, and bulk carriers do?",
    "What kind of fuel do tankers and container ships use?",
    "Praesent egestas ligula sed convallis varius?",
    "Ut efficitur augue eget tortor condimentum aliquet?",
    "Pellentesque volutpat leo dapibus finibus commodo?"
]

# Create your views here.
def index(request):
    context = {
        "questions": Question.objects.all(),
        "title": "Home",
        'text' : 'Hollo World'
    }
    return render(request, "home.html", context)


def student(request):
    context = {
        #"feedbacks": feedback,
        "title": "Student",
        "intro": intro,
        "followups": followups
    }

    return render(request, "home.html", context)


def tutor(request):
    context = {
        "feedbacks": feedback,
        "title": "Tutor",
        "intro": intro
    }
    return render(request, "tutor.html", context)