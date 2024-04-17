from django.urls import path, re_path
from aviato import views


urlpatterns = [
    path('', views.main, name='main'),
    path('about/', views.about, name='about'), 
    path('login/', views.login, name='login'),
    path('registration/', views.reg, name='registration'),
]