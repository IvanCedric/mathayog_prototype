from django.shortcuts import render
from django.http import HttpResponse
from .models import Question

questions = [
    {
        "question_text": "What up?",
        "pub_date": "2021-06-19"
    },
{
        "question_text": "What up, dog?",
        "pub_date": "2021-06-19"
    },
]

# Create your views here.
def index(request):
    context = {
        "questions": Question.objects.all(),
        "title": "Home"
    }
    return render(request, "home.html", context)