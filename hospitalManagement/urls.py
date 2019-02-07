from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^.*$', views.index)
]


# urlpatterns = [
#     path('patient/', include('patient.urls')),
#     path('lab/', include('lab.urls')),
#     path('admin/', admin.site.urls),
#
# ]
