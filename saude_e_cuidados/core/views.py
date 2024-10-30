from django.shortcuts import render

def index(request):
   return render(request,'core/core-index.html')

def calc(request):
   return render(request,'core/calc-index.html')

