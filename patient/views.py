from django.shortcuts import render
from django.http import HttpResponse
from .models import Patient
import json
from django.http import JsonResponse
from django.core.paginator import Paginator


# Create your views here.
def index(request):
    query = Patient.objects.all()
    if request.GET.get('sortOrder') == 'DESC':
        query = query.order_by('-'+request.GET.get('sortBy'))
    else:
        query = query.order_by(request.GET.get('sortBy'))

    if request.GET.get('rowsPerPage'):
        p = Paginator(query, request.GET.get('rowsPerPage'))

    page1 = p.page(request.GET.get('page'))

    return JsonResponse({
        'data': list(page1.object_list.values()),
        'totalItems': p.count,
    })


def create(request):

    if request.method == 'POST':
        data = json.loads(request.body)
        patient = Patient.objects.create(name=data['name'],
                                         age=data['age'],
                                         gender=data['gender'],
                                         ref_no='R001',
                                         care_of=data['care_of'],
                                         address=data['address'],
                                         mobile=data['mobile'])

        # return HttpResponse(Patient.objects.filter(id=patient.id).values())
        return JsonResponse({'type': 'success', 'message': 'Patient Created Successfully'})


def edit(request, id):
    patient= Patient.objects.filter(id=id).values()
    return JsonResponse({'result': list(patient)})


def update(request, id):
    if request.method == 'PATCH':
        data = json.loads(request.body)
        Patient.objects.filter(id=id).update(
            name=data['name'],
            age=data['age'],
            gender=data['gender'],
            ref_no='R001',
            care_of=data['care_of'],
            address=data['address'],
            mobile=data['mobile']
        )
        return JsonResponse({'type': 'success', 'message': 'Patient Update Successfully'})


