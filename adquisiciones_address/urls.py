from django.urls import path, include,re_path
from rest_framework import routers
from adquisiciones.views import AdquisicionViewSet
from adquisiciones.views import index
from django.conf import settings
from django.conf.urls.static import static
router = routers.DefaultRouter()
router.register(r'adquisiciones', AdquisicionViewSet)
from django.views.static import serve
from django.contrib import admin

urlpatterns = [  
    path('', include('adquisiciones.urls')),
    path('api/', include(router.urls)),
]
