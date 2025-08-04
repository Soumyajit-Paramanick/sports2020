from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
from products import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/products/', views.ProductList.as_view()),
    path('api/products/<int:pk>/', views.ProductDetail.as_view()),
    path('api/categories/', views.CategoryList.as_view()),
    path('api/promotional-banners/', views.PromotionalBannerList.as_view()),
    path('api/gallery-images/', views.GalleryImages.as_view()),
    path('api/homepage-banners/', views.HomepageBannerList.as_view()),

    # ✅ Serve media files in production too
    re_path(r'^media/(?P<path>.*)$', serve, {
        'document_root': settings.MEDIA_ROOT,
    }),
]

# ✅ This part still helps locally (only runs when DEBUG=True)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)





















# from django.contrib import admin
# from django.urls import path, include
# from django.conf import settings
# from django.conf.urls.static import static
# from products import views

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api/products/', views.ProductList.as_view()),
#     path('api/products/<int:pk>/', views.ProductDetail.as_view()),
#     path('api/categories/', views.CategoryList.as_view()),
#     path('api/promotional-banners/', views.ActivePromotionalBanner.as_view()),
#     path('api/gallery-images/', views.GalleryImages.as_view()),
# ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
