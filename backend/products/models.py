from django.db import models
from django.utils import timezone
class Category(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    short_description = models.CharField(max_length=300)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='product_images/')
    
    def __str__(self):
        return f"Image for {self.product.name}"
    
from django.utils import timezone

class PromotionalBanner(models.Model):
    message = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='banner_images/', null=True, blank=True)
    width = models.PositiveIntegerField(default=1200)
    height = models.PositiveIntegerField(default=400)

    def __str__(self):
        return f"{self.message} ({self.width}x{self.height})"

    def is_currently_active(self):
        now = timezone.now()
        return self.is_active and self.start_time <= now <= self.end_time
class GalleryImage(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='gallery/')
    category = models.CharField(max_length=50, choices=[
        ('players', 'Players'),
        ('jerseys', 'Jerseys'),
        ('equipment', 'Equipment'),
        ('events', 'Events'),
    ])
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class HomepageBanner(models.Model):
    image = models.ImageField(upload_to='homepage_banners/')
    width = models.PositiveIntegerField(default=1200)
    height = models.PositiveIntegerField(default=400)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Homepage Banner {self.id} ({self.width}x{self.height})"