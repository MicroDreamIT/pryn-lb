from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^ajax/patient/', include('patient.urls')),
    url(r'^.*$', views.index)
]
