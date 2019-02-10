from django.http import HttpResponse
from .models import Tests
import json
from django.http import JsonResponse


# Create your views here.
def index(request):
    return HttpResponse('hello world i am index')


def create(request):

    if request.method == 'POST':
        data = json.loads(request.body)
        test = Tests.objects.create(name=data['name'],
                                    unit=data['unit'],
                                    range=data['range'])
        # return HttpResponse(test.objects.filter(id=patient.id).values())
        return JsonResponse({'type': 'success', 'message': 'Test Created Successfully'})

