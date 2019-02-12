from django.http import HttpResponse
from .models import Diagnosis
import json
from django.http import JsonResponse



# Create your views here.
def index(request):
    return HttpResponse('hello world i am index')


def create(request):
    query = Diagnosis.objects.filter(pk=1)
    return JsonResponse({'result': list(query.values())})


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

