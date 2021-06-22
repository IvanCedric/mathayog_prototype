from django.urls import path

from . import views

urlpatterns = [
    path('index/', views.student, name='index'),
    path('student/', views.student, name='student'),
    path('tutor/', views.tutor, name='tutor'),
]