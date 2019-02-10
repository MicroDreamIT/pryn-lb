from django.http import HttpResponse
from .models import Doctor
import json
from django.http import JsonResponse


# Create your views here.
def index(request):
    return HttpResponse('hello world i am index')


def create(request):

    if request.method == 'POST':
        data = json.loads(request.body)
        doctor = Doctor.objects.create(name=data['name'],
                                       email=data['email'],
                                       mobile=data['mobile'])
        # return HttpResponse(doctor.objects.filter(id=patient.id).values())
        return JsonResponse({'type': 'success', 'message': 'New Doctor Created Successfully'})

