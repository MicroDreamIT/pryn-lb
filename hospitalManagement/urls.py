from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('ajax/', include('patient.urls')),
    url(r'^.*$', views.index)
]
