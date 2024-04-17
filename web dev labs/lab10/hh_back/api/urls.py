from django.urls import path
from api import views
from api.views.apiRequests import MyVacancy

urlpatterns = [
    # Companies
    path('company/', views.company_list),
    path('company/<int:company_id>/', views.company_detail),
    path('company/<int:company_id>/vacancy/', views.company_by_vacancy),

    # Vacancies
    path('vacancy/', MyVacancy.as_view()),
    path('vacancy/<int:vacancy_id>/', views.vacancy_detail),
    path('vacancy/top_ten/', views.top10_vacancies)

]