from django.contrib import admin
from .models import Category, Product, ProductImage

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 3

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline]
    list_display = ('name', 'price', 'category')
    list_filter = ('category',)
    search_fields = ('name', 'description')

admin.site.register(Category)
admin.site.register(Product, ProductAdmin)





from .models import PromotionalBanner

@admin.register(PromotionalBanner)
class PromotionalBannerAdmin(admin.ModelAdmin):
    list_display = ('message', 'is_active', 'start_time', 'end_time', 'is_currently_active', 'image', 'width', 'height')
    list_filter = ('is_active',)
    search_fields = ('message',)

    def save_model(self, request, obj, form, change):
        if obj.image:
            from PIL import Image
            img = Image.open(obj.image)
            if img.width != obj.width or img.height != obj.height:
                from django.core.exceptions import ValidationError
                raise ValidationError(f"Image size must be {obj.width}x{obj.height} pixels. Uploaded image is {img.width}x{img.height}.")
        super().save_model(request, obj, form, change)

from .models import GalleryImage

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'is_active')
    list_filter = ('category', 'is_active')
    search_fields = ('title',)

from .models import HomepageBanner

@admin.register(HomepageBanner)
class HomepageBannerAdmin(admin.ModelAdmin):
    list_display = ('id', 'image', 'width', 'height', 'is_active', 'created_at')
    list_filter = ('is_active',)

    def save_model(self, request, obj, form, change):
        if obj.image:
            from PIL import Image
            from io import BytesIO
            from django.core.files.base import ContentFile
            img = Image.open(obj.image)
            if img.width != obj.width or img.height != obj.height:
                img = img.convert('RGB')  # Ensure compatibility
                img = img.resize((obj.width, obj.height), Image.LANCZOS)
                buffer = BytesIO()
                img.save(buffer, format='JPEG', quality=95)
                file_name = obj.image.name
                obj.image.save(file_name, ContentFile(buffer.getvalue()), save=False)
        super().save_model(request, obj, form, change)