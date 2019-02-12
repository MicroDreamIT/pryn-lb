from django.http import HttpResponse
from .models import Diagnosis
from patient.models import Patient
from tests.models import Tests
import json
from django.http import JsonResponse


def index(request):
    return HttpResponse('hello world i am index')


def create(request):
    patients = Patient.objects.all(pk=1)
    patients = Tests.objects.all(pk=1)
    return JsonResponse({
        'patients': list(patients.values()),
        'tests': list(patients.values())
    })


def store(request):

    if request.method == 'POST':
        data = json.loads(request.body)
        diagnosis = Diagnosis.objects.create(name=data['name'],
                                             # unit=data['unit'],
                                             # range=data['range'],
                                             unit='oo',
                                             range='oo',
                                             result=data['result'],
                                             opinion=data['opinion'],
                                             advice=data['advice'],
                                             refer_by=data['refer_by'],
                                             )
        # return HttpResponse(diagnosis.objects.filter(id=patient.id).values())
        return JsonResponse({'type': 'success', 'message': 'Diagnosis Created Successfully'})

