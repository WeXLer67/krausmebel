from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import User

# Create your models here.


# Модель для дополнительных полей в регистрацию
class UserProfile(models.Model):

    # Связь для оновной модели один к одному.
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    # Дополнительные поля в регистрации - номер телефона и город.
    phoneNumber = PhoneNumberField('Телефон', unique=True, null=False, blank=False)
    city = models.CharField('Город', max_length=100)
    
    def __str__(self):
        return self.user.username


# Модель для обеденних столов
class Diningtables(models.Model):

    # Название полей в таблице обеденные столы.
    name = models.CharField('Название товара', max_length=100)
    size = models.CharField('Размеры', max_length=100)
    color = models.CharField('Цвет каркаса', max_length=250)
    price = models.CharField('Цена товара', max_length=100)
    img = models.ImageField('Изображение товара')

    # Видимость записей в админсокй панели по их именам.
    def __str__(self):
        return f'{self.name}'

    # Название категории в админской панели.
    class Meta:
        verbose_name = 'Обеденный стол'
        verbose_name_plural = 'Обеденные столы'


# Модель для кресел
class Chairs(models.Model):

    # Название полей в таблице кресла.
    name = models.CharField('Название товара', max_length=100)
    size = models.CharField('Размеры', max_length=100)
    color = models.CharField('Цвет каркаса', max_length=250)
    upholstery = models.CharField('Обивка', max_length=250)
    price = models.CharField('Цена товара', max_length=100)
    img = models.ImageField('Изображение товара')

    # Видимость записей в админсокй панели по их именам.
    def __str__(self):
        return f'{self.name}'

    # Название категории в админской панели.
    class Meta:
        verbose_name = 'Кресло'
        verbose_name_plural = 'Кресла'


# Модель для диванов
class Sofas(models.Model):

    # Название полей в таблице диваны.
    name = models.CharField('Название товара', max_length=100)
    size = models.CharField('Размеры', max_length=100)
    color = models.CharField('Цвет каркаса', max_length=250)
    upholstery = models.CharField('Обивка', max_length=250)
    price = models.CharField('Цена товара', max_length=100)
    img = models.ImageField('Изображение товара')

    # Видимость записей в админсокй панели по их именам.
    def __str__(self):
        return f'{self.name}'

    # Название категории в админской панели.
    class Meta:
        verbose_name = 'Диван'
        verbose_name_plural = 'Диваны'


# Модель для журнальных столиков
class Coffeetables(models.Model):

    # Название полей в таблице обеденные столы.
    name = models.CharField('Название товара', max_length=100)
    size = models.CharField('Размеры', max_length=100)
    color = models.CharField('Цвет каркаса', max_length=250)
    price = models.CharField('Цена товара 1', max_length=100)
    price2 = models.CharField('Цена товара 2', max_length=100)
    img = models.ImageField('Изображение товара')

    # Видимость записей в админсокй панели по их именам.
    def __str__(self):
        return f'{self.name}'

    # Название категории в админской панели.
    class Meta:
        verbose_name = 'Журнальный стол'
        verbose_name_plural = 'Журнальные столы'


# Модель для пуфов и банкеток
class Poufs(models.Model):

    # Название полей в таблице пуфы и банкетки.
    name = models.CharField('Название товара', max_length=100)
    size = models.CharField('Размеры', max_length=100)
    color = models.CharField('Цвет каркаса', max_length=250)
    upholstery = models.CharField('Обивка', max_length=250)
    price = models.CharField('Цена товара', max_length=100)
    img = models.ImageField('Изображение товара')

    # Видимость записей в админсокй панели по их именам.
    def __str__(self):
        return f'{self.name}'

    # Название категории в админской панели.
    class Meta:
        verbose_name = 'Банкетка и пуф'
        verbose_name_plural = 'Банкетки и пуфы'


# Модель для обеденных стульев
class Diningchairs(models.Model):

    # Название полей в таблице обенные сутлья.
    name = models.CharField('Название товара', max_length=100)
    size = models.CharField('Размеры', max_length=250)
    color = models.CharField('Цвет каркаса', max_length=250)
    upholstery = models.CharField('Обивка', max_length=250, default='')
    description = models.CharField('Описание товара', max_length=250, blank=True)
    price = models.CharField('Цена товара', max_length=100)
    img = models.ImageField('Изображение товара')

    # Видимость записей в админсокй панели по их именам.
    def __str__(self):
        return f'{self.name}'

    # Название категории в админской панели.
    class Meta:
        verbose_name = 'Обеденный стул'
        verbose_name_plural = 'Обеденные стулья'


# Модель для тумб
class Bedsidetables(models.Model):

    # Название полей в таблице тумбы.
    name = models.CharField('Название товара', max_length=100)
    size = models.CharField('Размеры', max_length=100)
    color = models.CharField('Цвет каркаса', max_length=250)
    colorLDSP = models.CharField('Цвет ЛДСП', max_length=250)
    price = models.CharField('Цена товара', max_length=100)
    img = models.ImageField('Изображение товара')

    # Видимость записей в админсокй панели по их именам.
    def __str__(self):
        return f'{self.name}'

    # Название категории в админской панели.
    class Meta:
        verbose_name = 'Тумба'
        verbose_name_plural = 'Тумбы'


# Модель для консолей
class Consoles(models.Model):

    # Название полей в таблице консоли.
    name = models.CharField('Название товара', max_length=100)
    size = models.CharField('Размеры', max_length=100)
    color = models.CharField('Цвет каркаса', max_length=250)
    price = models.CharField('Цена товара 1', max_length=100)
    price2 = models.CharField('Цена товара 2', max_length=100)
    tabletop = models.CharField('Столешница', max_length=250)
    description = models.CharField('Описание товара', max_length=250)
    img = models.ImageField('Изображение товара')

    # Видимость записей в админсокй панели по их именам.
    def __str__(self):
        return f'{self.name}'

    # Название категории в админской панели.
    class Meta:
        verbose_name = 'Консоль'
        verbose_name_plural = 'Консоли'


# Модель для стеллажей
class Shelving(models.Model):

    # Название полей в таблице сетллажи.
    name = models.CharField('Название товара', max_length=100)
    size = models.CharField('Размеры', max_length=100)
    color = models.CharField('Цвет каркаса', max_length=250)
    price = models.CharField('Цена товара 1', max_length=100)
    price2 = models.CharField('Цена товара 2', max_length=100)
    description = models.CharField('Описание товара', max_length=250)
    img = models.ImageField('Изображение товара')

    # Видимость записей в админсокй панели по их именам.
    def __str__(self):
        return f'{self.name}'

    # Название категории в админской панели.
    class Meta:
        verbose_name = 'Стеллаж'
        verbose_name_plural = 'Стеллажи'
