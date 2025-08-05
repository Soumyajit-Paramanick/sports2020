from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from .models import Product, Category, PromotionalBanner, GalleryImage, HomepageBanner
from .serializers import (
    ProductSerializer,
    CategorySerializer,
    PromotionalBannerSerializer,
    GalleryImageSerializer,
    HomepageBannerSerializer,
)

class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category']
    search_fields = ['name', 'description']

    def get_queryset(self):
        queryset = super().get_queryset()
        min_price = self.request.query_params.get('min_price')
        max_price = self.request.query_params.get('max_price')
        if min_price:
            queryset = queryset.filter(price__gte=min_price)
        if max_price:
            queryset = queryset.filter(price__lte=max_price)
        return queryset

    def get_serializer_context(self):
        return {'request': self.request}

class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_serializer_context(self):
        return {'request': self.request}

class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_serializer_context(self):
        return {'request': self.request}

class PromotionalBannerList(generics.ListAPIView):
    queryset = PromotionalBanner.objects.filter(is_active=True)
    serializer_class = PromotionalBannerSerializer

    def get_serializer_context(self):
        return {'request': self.request}

class GalleryImages(generics.ListAPIView):
    queryset = GalleryImage.objects.filter(is_active=True)
    serializer_class = GalleryImageSerializer

    def get_serializer_context(self):
        return {'request': self.request}

class HomepageBannerList(generics.ListAPIView):
    queryset = HomepageBanner.objects.filter(is_active=True)
    serializer_class = HomepageBannerSerializer

    def get_serializer_context(self):
        return {'request': self.request}



















































# from rest_framework import generics
# from django_filters.rest_framework import DjangoFilterBackend
# from rest_framework import filters
# from .models import Product, Category
# from .serializers import ProductSerializer, CategorySerializer

# class ProductList(generics.ListAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#     filter_backends = [DjangoFilterBackend, filters.SearchFilter]
#     filterset_fields = ['category']
#     search_fields = ['name', 'description']
    
#     def get_queryset(self):
#         queryset = super().get_queryset()
#         min_price = self.request.query_params.get('min_price')
#         max_price = self.request.query_params.get('max_price')
        
#         if min_price:
#             queryset = queryset.filter(price__gte=min_price)
#         if max_price:
#             queryset = queryset.filter(price__lte=max_price)
            
#         return queryset

# class ProductDetail(generics.RetrieveAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer

# class CategoryList(generics.ListAPIView):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer


# from .models import PromotionalBanner
# from .serializers import PromotionalBannerSerializer
# from django.utils import timezone
# class PromotionalBannerList(generics.ListAPIView):
#     queryset = PromotionalBanner.objects.filter(is_active=True)
#     serializer_class = PromotionalBannerSerializer

#     def get_queryset(self):
#         return super().get_queryset()

# from .models import GalleryImage
# from .serializers import GalleryImageSerializer

# class GalleryImages(generics.ListAPIView):
#     queryset = GalleryImage.objects.filter(is_active=True)
#     serializer_class = GalleryImageSerializer

# from .models import HomepageBanner
# from .serializers import HomepageBannerSerializer

# class HomepageBannerList(generics.ListAPIView):
#     queryset = HomepageBanner.objects.filter(is_active=True)
#     serializer_class = HomepageBannerSerializer