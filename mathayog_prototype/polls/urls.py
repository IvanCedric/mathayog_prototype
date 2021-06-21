from django.urls import path

from . import views

urlpatterns = [
    path('student/', views.index, name='index'),
    path('tutor/', views.index, name='index'),
]