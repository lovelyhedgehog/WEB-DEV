from django.urls import path

from . import views

app_name = 'api'
urlpatterns = [
    path('', views.index, name='index'),
    path('products/', views.products_list, name='products_list'),
    path('products/<int:id>/', views.product_detail, name='product_detail'),
    path('categories/', views.categories_list, name='categories_list'),
    path('categories/<int:id>/', views.category_detail, name='category_details'),
    path('categories/<int:id>/products/', views.category_products, name='category_products'),
]