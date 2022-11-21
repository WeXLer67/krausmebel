from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


# URL адреса всех страниц
urlpatterns = [

   # URL адрес главной страницы.
   path('', views.index, name='main'),

   # URL адреса товаров.
   path('sofas', views.sofas, name='sofas'),
   path('shelving', views.shelving, name='shelving'),
   path('diningtables', views.diningtables, name='diningtables'),
   path('coffeetables', views.coffeetables, name='coffeetables'),
   path('diningchairs', views.diningchairs, name='diningchairs'),
   path('poufs', views.poufsandbanquettes, name='poufs'),
   path('bedsidetables', views.bedsidetable, name='bedsidetables'),
   path('consoles', views.consoles, name='consoles'),
   path('chairs', views.chairs, name='chairs'),

   # URL адреса новостей и акций.
   path('sales', views.sales, name='sales'),
   path('new1', views.new1, name='new1'),

   # URL адреса с информацией.
   path('contacts', views.contacts, name='contacts'),
   path('cooperation', views.cooperation, name='cooperation'),
   path('Shipping_and_payment', views.shipping_and_payment, name='Shipping_and_payment'),

   # URL адреса с регистрацией.
   path('registration', views.registration, name='reg'),
   path('profile', views.profile, name='profile'),
   path('login', views.LoginUser.as_view(), name='login'),
   path('logout', views.logout_user, name='logout'),
] \
 + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
