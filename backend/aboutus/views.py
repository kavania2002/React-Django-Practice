from django.shortcuts import render
from .serializers import PeopleSerializer
from rest_framework import serializers, viewsets
from .models import People

# Create your views here.
class PeopleView(viewsets.ModelViewSet):
    serializer_class = PeopleSerializer
    queryset = People.objects.all()
    print(queryset)