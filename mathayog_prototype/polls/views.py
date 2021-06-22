from django.shortcuts import render
from django.http import HttpResponse
from .models import Question


intro = """Ninety-five percent of world trade is moved by sea, by roughly 50 000 tankers, bulk carriers
and container ships. Most of these ships use diesel fuel.
\n\n
Engineers are planning to develop wind power support for ships. Their proposal is to attach kite sails to ships and use
the wind's power to help reduce diesel consumption and the fuel's impact on the environment."""

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
        "title": "Home"
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