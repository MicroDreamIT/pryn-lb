from django.http import HttpResponse
from .models import Tests
import json
from django.http import JsonResponse
from django.core.paginator import Paginator


# Create your views here.
def index(request):
    query = Tests.objects.all()
    if request.GET.get('sortOrder') == 'DESC':
        query = query.order_by('-' + request.GET.get('sortBy'))
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
        test = Tests.objects.create(name=data['name'],
                                    unit=data['unit'],
                                    range=data['range'],
                                    type=data['type'])
        # return HttpResponse(test.objects.filter(id=patient.id).values())
        return JsonResponse({'type': 'success', 'message': 'Test Created Successfully'})

