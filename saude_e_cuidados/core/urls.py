from django.urls import path
from . import views

urlpatterns = [
   path('', views.index, name="core-index"),
   path('calculadora/', views.calc, name="calc-index")
]