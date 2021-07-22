from rest_framework import serializers
from .models import Category
from . import models

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('name','description')

