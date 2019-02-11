from django.http import HttpResponse
from .models import Company
import json
from django.http import JsonResponse


# Create your views here.
def index(request):
    return HttpResponse('hello world i am index')


def create(request):

    if request.method == 'POST':
        data = json.loads(request.body)
        company = Company.objects.create(name=data['name'],
                                         sub_name=data['sub_name'],
                                         email=data['email'],
                                         mobile=data['mobile'],
                                         address=data['address'])
        # return HttpResponse(company.objects.filter(id=patient.id).values())
        return JsonResponse({'type': 'success', 'message': 'New Company Created Successfully'})

