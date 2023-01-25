from rest_framework import serializers

from . models import Item


class ItemSerializer(serializers.ModelField):
    class Meta:
        model = Item
        fields = ['item']
