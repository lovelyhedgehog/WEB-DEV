from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Company
from api.models import Vacancy


def companies_list(request):
    companies = Company.objects.all()
    json_companies = [c.to_json() for c in companies]
    return JsonResponse(json_companies, safe=False)


def company_details(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(company.to_json())


def vacancies_list_by_company(request, company_id):
    try:
        c = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    vacancies = Vacancy.objects.filter(company=c)
    json_vacancies = [v.to_json() for v in vacancies]
    return JsonResponse(json_vacancies, safe=False)


def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    json_vacancies = [v.to_json() for v in vacancies]
    return JsonResponse(json_vacancies, safe=False)


def vacancy_details(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(vacancy.to_json())


def top_vacancies_by_salary(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    json_vacancies = [v.to_json() for v in vacancies]
    return JsonResponse(json_vacancies, safe=False)


