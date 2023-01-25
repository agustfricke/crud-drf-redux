from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response

from . serializers import ItemSerializer
from . models import Item


@api_view(['GET'])
def get_items(request):
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_solo_item(request, pk):
    item = Item.objects.get(pk=pk)
    serializer = ItemSerializer(item, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def create_item(request):
    data = request.data
    post_item = Item.objects.create(item=data['item'])
    serializer = ItemSerializer(post_item, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def update(request,pk):    
    data = request.data
    item = Item.objects.get(pk=pk)
    serializer = ItemSerializer(instance=item, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def delete(request, pk):
    item = Item.objects.get(pk=pk)
    item.delete()
    return Response('Item Eliminado')












