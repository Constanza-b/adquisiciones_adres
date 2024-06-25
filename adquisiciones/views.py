
from django.shortcuts import render,get_object_or_404
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from .models import Adquisicion
from .serializers import AdquisicionSerializer
from rest_framework.decorators import action
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os
class AdquisicionViewSet(viewsets.ModelViewSet):
    queryset = Adquisicion.objects.all()
    serializer_class = AdquisicionSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(data={'deleted': True})
     
    @action(detail=True, methods=['GET'])
    def search_id(self, request, pk=None):
        queryset = Adquisicion.objects.filter(id=pk)
        adquisicion = get_object_or_404(queryset, pk=pk)
        serializer = AdquisicionSerializer(adquisicion)
        return Response(serializer.data)

def index(request):
    return render(request, 'index.html')
def javascript_file(request, filename):
    with open(filename, 'r') as f:
        content = f.read()
    response = HttpResponse(content, content_type='application/javascript')
    return response