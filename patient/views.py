import simplejson as simplejson
from django.shortcuts import render
from django.http import HttpResponse
from .models import Patient
import json
from django.http import JsonResponse
from django.core import serializers

# Create your views here.
def index(request):
    return HttpResponse('hello world i am index')


def create(request):

    if request.method == 'POST':
        data = json.loads(request.body)
        patient = Patient.objects.create(name=data['name'],
                               age=data['age'],
                               gender=data['gender'],
                               ref_no='R001',
                               care_of=data['care_of'],
                               address=data['address']
                               )

        # return HttpResponse(Patient.objects.filter(id=patient.id).values())
        return HttpResponse('Patient Created Successfully')

