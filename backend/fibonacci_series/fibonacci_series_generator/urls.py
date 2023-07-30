from django.urls import path

from . import views

urlpatterns = [
    path('fibonacci_series', views.FibonacciSeries.as_view())
]
