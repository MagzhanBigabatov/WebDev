
from django.urls import path, re_path
from api import views


urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:product_id>/', views.product_detail),
    path('categories/', views.category_list),
    path('categories/<int:category_id>/', views.category_detail),
    path('categories/<int:category_id>/products/', views.products_by_category),
    path('company/', views.company_list),
    path('company/<int:company_id>/', views.company_by_id),
    path('company/<int:company_id>/vacancy', views.company_id_vacancy),
    path('vacancy/', views.vacancy_list),
    path('vacancy/<int:vacancy_id>/', views.vacancy_by_id),
    path('vacancy/top_ten/', views.top_vacancy),
]
