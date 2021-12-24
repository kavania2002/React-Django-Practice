from django.db.models import fields
from rest_framework import serializers
from .models import People

class PeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = People
        fields = ('id', 'name', 'photo', 'email', 'content')