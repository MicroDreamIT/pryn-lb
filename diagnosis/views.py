from django.http import HttpResponse
from .models import Diagnosis
import json
from django.http import JsonResponse


# Create your views here.
def index(request):
    return HttpResponse('hello world i am index')


def create(request):

    if request.method == 'POST':
        data = json.loads(request.body)
        diagnosis = Diagnosis.objects.create(name=data['name'],
                                             # unit=data['unit'],
                                             # range=data['range'],
                                             unit='oo',
                                             range='oo',
                                             result=data['result'],
                                             opinion=data['comments'],
                                             advice=data['advice'],
                                             prepared=data['prepared'],
                                             checked_by=data['checked'],
                                             technician=data['technician'])
        # return HttpResponse(diagnosis.objects.filter(id=patient.id).values())
        return JsonResponse({'type': 'success', 'message': 'Diagnosis Created Successfully'})

