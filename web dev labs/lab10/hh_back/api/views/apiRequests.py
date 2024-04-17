from django.shortcuts import render
import json
from django.http.response import JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancyModelSerializer

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        company = Company.objects.all()
        serializer_company = CompanySerializer(company, many=True)
        return JsonResponse(serializer_company.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        id = data.get('id')  # Получаем id из данных запроса
        company = Company.objects.create(
            id=id,
            name=data.get('name', ''),
            description=data.get('description', ''),
            city=data.get('city', ''),
            address=data.get('address', '')
        )
        return JsonResponse(company.to_json())

@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)

    except Company.DoesNotExist as e:
        return JsonResponse({'Error': str(e)})

    if request.method == 'GET':
        return JsonResponse(company.to_json())


    if request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data.get('name', company.name)
        company.city = data.get('city', '')
        company.save()
        return JsonResponse(company.to_json())


    if request.method == 'DELETE':
        company.delete()
        return JsonResponse({"deleted": True})

def company_by_vacancy(request, company_id):
    vacancy = Vacancy.objects.filter(company_id=company_id)
    vacancy_json = [p.to_json() for p in vacancy]
    return JsonResponse(vacancy_json, safe=False)


class MyVacancy(APIView):
    def get(self, request):
        vacancy = Vacancy.objects.all()
        serializer_vacancy = VacancyModelSerializer(vacancy, many=True)
        return Response(serializer_vacancy.data, status=status.HTTP_200_OK)

    def post(self, request):
        data = json.loads(request.body)
        vacancy = Vacancy.objects.create(
            name=data.get('name', ''),
            description=data.get('description', ''),
            salary=data.get('salary', ''),
            company=data.get('company', '')
        )
        serializer = VacancyModelSerializer(vacancy)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)

    except Vacancy.DoesNotExist as e:
        return JsonResponse({'Error': str(e)})

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())


    if request.method == 'PUT':
        data = json.loads(request.body)
        vacancy.name = data.get('name', vacancy.name)
        vacancy.salary = data.get('salary', '')
        vacancy.save()
        return JsonResponse(vacancy.to_json())


    if request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({"deleted": True})


def top10_vacancies(request):
    top10_vacancy = Vacancy.objects.all().order_by('-raiting')[:10]
    top10_vacancy_json = [p.to_json() for p in top10_vacancy]
    return JsonResponse(top10_vacancy_json, safe=False)
