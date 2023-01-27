from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_items),        
    path('<int:pk>/', views.get_item),
    path('create/', views.create_item),
    path('update/<int:pk>/', views.update_item),
    path('delete/<int:pk>/', views.delete_item),
]

