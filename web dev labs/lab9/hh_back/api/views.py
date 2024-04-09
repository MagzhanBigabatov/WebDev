from django.shortcuts import render
from api.models import Product, Category, Company, Vacancy
# Create your views here.
from django.http.response import HttpResponse, JsonResponse

def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def product_detail(request, product_id):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    for product in products_json:
        if(product['id'] == product_id):
            return JsonResponse(product)
    return JsonResponse({'Error': 'Product not found'})

def category_list(request):
    category = Category.objects.all()
    category_json = [p.to_json() for p in category]
    return JsonResponse(category_json, safe=False)

def category_detail(request, category_id):
    category = Category.objects.all()
    category_json = [p.to_json() for p in category]
    for category in category_json:
        if(category['id'] == category_id):
            return JsonResponse(category)
    return JsonResponse({'Error': 'Category does not exit!!!'})


def products_by_category(request, category_id):
    products = Product.objects.filter(category_id=category_id)
    product_json = [p.to_json() for p in products]
    return JsonResponse(product_json, safe=False)



def company_list(request):
    companies = Company.objects.all()
    company_json = [p.to_json() for p in companies]
    return JsonResponse(company_json, safe=False)

def company_by_id(request, company_id):
    company = Company.objects.all()
    company_json = [p.to_json() for p in company]
    for company in company_json:
        if(company['id'] == company_id):
            return JsonResponse(company, safe=False)
    return JsonResponse({'Error': 'Product not found'})

def company_id_vacancy(request, company_id):
    try:
        vacancy = Vacancy.objects.filter(company_id=company_id)
        vacancy_json = [p.to_json() for p in vacancy]
        return JsonResponse(vacancy_json, safe=False)
    except Vacancy.DoesNotExist:
        return JsonResponse({'Error': 'Vacancies not found'})
    



def vacancy_list(request):
    vac = Vacancy.objects.all()
    vac_json = [p.to_json() for p in vac]
    return JsonResponse(vac_json, safe=False)

def vacancy_by_id(request, vacancy_id):
    vacancy = Vacancy.objects.all()
    Vacancy_json = [p.to_json() for p in vacancy]
    for vacancy in Vacancy_json:
        if(vacancy['id'] == vacancy_id):
            return JsonResponse(vacancy, safe=False)
    return JsonResponse({'Error': 'Product not found'})

def top_vacancy(request):
    vac_top = Vacancy.objects.order_by('-rating')[:10]
    vac_json = [p.to_json() for p in vac_top]
    return JsonResponse(vac_json, safe=False)