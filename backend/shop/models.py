from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse


class Customer(models.Model):
	user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
	name = models.CharField(max_length=100, null=True)
	email = models.CharField(max_length=100)

	def __str__(self):
		return self.name


class Product(models.Model):
#	seller= models.ForeignKey(User, default=1, on_delete=models.CASCADE)
	category = models.CharField(max_length=100, null=True) 
	subcategory = models.CharField(max_length=100, null=True)
	name = models.CharField(max_length=255, null=True)
	price = models.DecimalField(max_digits=11, decimal_places=2)
	likes_count = models.IntegerField(default=0)
	color_1 = models.CharField(max_length=100, null=True, blank=True)
	color_2 = models.CharField(max_length=100, null=True, blank=True)
	color_1_thumbnail = models.CharField(max_length=255, null=True, blank=True)
	color_1_image = models.CharField(max_length=255, null=True, blank=True)
	color_2_thumbnail = models.CharField(max_length=255, null=True, blank=True)
	color_2_image = models.CharField(max_length=255, null=True, blank=True)
	image_url = models.CharField(max_length=255, null=True)

	def __str__(self):
		return self.name

	def get_absolute_url(self):
		return reverse('product-detail', kwargs={'pk': self.pk})

class Order(models.Model):
	customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True, blank=True)
	date_ordered = models.DateTimeField(auto_now_add=True)
	complete = models.BooleanField(default=False)
	transaction_id = models.CharField(max_length=100, null=True)

	def __str__(self):
		return str(self.id)

	@property
	def shipping(self):
		shipping = False
		orderitems = self.orderitem_set.all()
		for i in orderitems:
			if i.product.digital == False:
				shipping = True
		return shipping
		 
	@property
	def get_cart_total(self):
		orderitems = self.orderitem_set.all()
		total = sum([item.get_total for item in orderitems])
		return total 

	@property
	def get_cart_items(self):
		orderitems = self.orderitem_set.all()
		total = sum([item.quantity for item in orderitems])
		return total 

class OrderItem(models.Model):
	product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
	order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
	quantity = models.IntegerField(default=0, null=True, blank=True)
	date_added = models.DateTimeField(auto_now_add=True)

	@property
	def get_total(self):
		total = self.product.price * self.quantity
		return total

class ShippingAddress(models.Model):
	customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True)
	order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
	address = models.CharField(max_length=100, null=False)
	city = models.CharField(max_length=100, null=False)
	state = models.CharField(max_length=100, null=False)
	zipcode = models.CharField(max_length=100, null=False)
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.address

		