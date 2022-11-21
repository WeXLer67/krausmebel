from django.contrib import admin
from .models import Diningtables, Chairs, Sofas, Coffeetables, Poufs,\
    Diningchairs, Bedsidetables, Consoles, Shelving, UserProfile


# Register your models here.
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'phoneNumber', 'city')


# Регистрация моделей товаров.
admin.site.register(Diningtables)
admin.site.register(Sofas)
admin.site.register(Chairs)
admin.site.register(Coffeetables)
admin.site.register(Poufs)
admin.site.register(Diningchairs)
admin.site.register(Bedsidetables)
admin.site.register(Consoles)
admin.site.register(Shelving)
admin.site.register(UserProfile, UserProfileAdmin)
