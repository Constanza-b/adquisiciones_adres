from django.urls import path
from . import views
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.views.generic import RedirectView
from rest_framework import routers
router = routers.DefaultRouter()
from adquisiciones.views import AdquisicionViewSet
router.register(r'adquisiciones', AdquisicionViewSet)
urlpatterns = [
     path('api/', include(router.urls)),
    path('crear-adquisicion/', RedirectView.as_view(url='/')),
    path('listar-adquisicion/', RedirectView.as_view(url='/')),
    path('static/<path:filename>', views.javascript_file, name='javascript_file'),
    path('', TemplateView.as_view(template_name='index.html')),
] 