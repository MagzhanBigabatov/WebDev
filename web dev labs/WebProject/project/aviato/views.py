from django.shortcuts import render

def main(request):
    return render(request, 'aviato/main.html')

def about(request):
    return render(request, 'aviato/about.html')

def login(request):
    return render(request, 'aviato/login.html')

def reg(request):
    return render(request, 'aviato/registr.html')
