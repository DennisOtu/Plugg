from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path('all/', ProductListAPIView.as_view()),
    path('product/<int:pk>/', ProductDetailAPIView.as_view()),
    path('cart/', views.cart, name='cart'),
    path('checkout/', views.checkout, name='checkout'),
   	path('process_order/', views.processOrder, name="process_order"),
	#path('update_item/', views.updateItem, name="update_item"),
    #path('product/create/', views.addProductAPIView, name='product-create'),
    #path('product/<int:pk>/update/', views.updateProductAPIView, name='product-update'),
    #path('product/<int:pk>/delete/', deleteProduct.as_view(), name='product-delete'),
]
