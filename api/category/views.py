from rest_framework import viewsets
from . import serializers
from . import models

# Create your views here.

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = models.Category.objects.all().order_by('name')
    serializer_class = serializers.CategorySerializer