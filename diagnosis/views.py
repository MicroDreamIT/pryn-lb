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
        test = Diagnosis.objects.create(test_name=data['test_name'],
                                        test_unit=data['test_unit'],
                                        test_range=data['test_range'])
        # return HttpResponse(doctor.objects.filter(id=patient.id).values())
        return JsonResponse({'type': 'success', 'message': 'Test Created Successfully'})

