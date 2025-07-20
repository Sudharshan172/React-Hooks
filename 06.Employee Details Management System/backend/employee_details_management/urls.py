from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.add_employee, name='add_employee'),
    path('display/', views.display_employees, name='display_employees'),
    path('update/', views.update_employee, name='update_employee'),
    path('delete/', views.delete_employee, name='delete_employee'),
]
