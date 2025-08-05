from rest_framework import serializers
from .models import Product, ProductImage, Category, PromotionalBanner, GalleryImage, HomepageBanner

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['image']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)
    
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'short_description', 'price', 'category', 'images']

class PromotionalBannerSerializer(serializers.ModelSerializer):
    is_currently_active = serializers.BooleanField(read_only=True)
    image = serializers.ImageField(read_only=True)
    
    class Meta:
        model = PromotionalBanner
        fields = ['id', 'message', 'is_active', 'start_time', 'end_time', 'is_currently_active', 'image', 'width', 'height']

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = ['id', 'title', 'image', 'category']

class HomepageBannerSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(read_only=True)
    class Meta:
        model = HomepageBanner
        fields = ['id', 'image', 'width', 'height', 'is_active']

















































# from rest_framework import serializers
# from .models import Product, ProductImage, Category, PromotionalBanner, GalleryImage, HomepageBanner

# class ProductImageSerializer(serializers.ModelSerializer):
#     image = serializers.SerializerMethodField()

#     class Meta:
#         model = ProductImage
#         fields = ['image']

#     def get_image(self, obj):
#         request = self.context.get('request')
#         if request:
#             return request.build_absolute_uri(obj.image.url)
#         return obj.image.url

# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Category
#         fields = ['id', 'name']

# class ProductSerializer(serializers.ModelSerializer):
#     images = ProductImageSerializer(many=True, read_only=True)
#     category = CategorySerializer(read_only=True)

#     class Meta:
#         model = Product
#         fields = ['id', 'name', 'description', 'short_description', 'price', 'category', 'images']

# class PromotionalBannerSerializer(serializers.ModelSerializer):
#     image = serializers.SerializerMethodField()
#     is_currently_active = serializers.BooleanField(read_only=True)

#     class Meta:
#         model = PromotionalBanner
#         fields = ['id', 'message', 'is_active', 'start_time', 'end_time', 'is_currently_active', 'image', 'width', 'height']

#     def get_image(self, obj):
#         request = self.context.get('request')
#         if request:
#             return request.build_absolute_uri(obj.image.url)
#         return obj.image.url

# class GalleryImageSerializer(serializers.ModelSerializer):
#     image = serializers.SerializerMethodField()

#     class Meta:
#         model = GalleryImage
#         fields = ['id', 'title', 'image', 'category']

#     def get_image(self, obj):
#         request = self.context.get('request')
#         if request:
#             return request.build_absolute_uri(obj.image.url)
#         return obj.image.url

# class HomepageBannerSerializer(serializers.ModelSerializer):
#     image = serializers.SerializerMethodField()

#     class Meta:
#         model = HomepageBanner
#         fields = ['id', 'image', 'width', 'height', 'is_active']

#     def get_image(self, obj):
#         request = self.context.get('request')
#         if request:
#             return request.build_absolute_uri(obj.image.url)
#         return obj.image.url



















































# from rest_framework import serializers
# from .models import Product, ProductImage, Category, PromotionalBanner, GalleryImage, HomepageBanner

# class ProductImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ProductImage
#         fields = ['image']

# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Category
#         fields = ['id', 'name']

# class ProductSerializer(serializers.ModelSerializer):
#     images = ProductImageSerializer(many=True, read_only=True)
#     category = CategorySerializer(read_only=True)
    
#     class Meta:
#         model = Product
#         fields = ['id', 'name', 'description', 'short_description', 'price', 'category', 'images']

# class PromotionalBannerSerializer(serializers.ModelSerializer):
#     is_currently_active = serializers.BooleanField(read_only=True)
#     image = serializers.ImageField(read_only=True)
    
#     class Meta:
#         model = PromotionalBanner
#         fields = ['id', 'message', 'is_active', 'start_time', 'end_time', 'is_currently_active', 'image', 'width', 'height']

# class GalleryImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = GalleryImage
#         fields = ['id', 'title', 'image', 'category']

# class HomepageBannerSerializer(serializers.ModelSerializer):
#     image = serializers.ImageField(read_only=True)
#     class Meta:
#         model = HomepageBanner
#         fields = ['id', 'image', 'width', 'height', 'is_active']