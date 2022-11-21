from django import forms
from .models import UserProfile
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from phonenumber_field.widgets import PhoneNumberPrefixWidget


# Создаём класс формы (заявки).
class CommunicationForm(forms.Form):

    # Здесь задаются начальные настройки для поля email.
    email = forms.EmailField(required=True, label='Email',
                             widget=forms.EmailInput(attrs={'class': 'form-input', 'placeholder': 'Email'}))

    # Здесь задаются начальные настройки для поля телефон.
    phoneNumber = forms.CharField(label='Телефон',
                                  widget=forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'Телефон'}))
    phoneNumber = PhoneNumberPrefixWidget(initial='RU')

    # Функция очистки поля.
    def clean(self):
        cleaned_data = super().clean()
        return cleaned_data
 
 
# Создаём класс формы (регистрация)
class RegisterUser(UserCreationForm):

    # Здесь задаются начальные настройки для поля логин.
    username = forms.CharField(label='Логин',
                               widget=forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'Логин'}))

    # Здесь задаются начальные настройки для поля email.
    email = forms.EmailField(required=True, label='Email',
                             widget=forms.EmailInput(attrs={'class': 'form-input', 'placeholder': 'Email'}))

    # Здесь задаются начальные настройки для полей с паролем.
    password1 = forms.CharField(label='Пароль',
                                widget=forms.PasswordInput(attrs={'class': 'form-input', 'placeholder': 'Пароль'}))
    password2 = forms.CharField(label='Повтор пароля',
                                widget=forms.PasswordInput(attrs={'class': 'form-input', 'placeholder': 'Повтор пароля'}))

    # Здесь задаются начальные настройки для поля имя.
    first_name = forms.CharField(label='Имя',
                                 widget=forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'Имя'}))

    # Здесь задаются начальные настройки для поля фамилия.
    last_name = forms.CharField(label='Фамилия',
                                widget=forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'Фамилия'}))
    
    class Meta:

        # Свойство модели User
        model = User

        # Свойство назначения полей
        fields = ('username', 'email', 'password1', 'password2', 'first_name', 'last_name')

    # Сохранение в бахзу данных
    def save(self, commit=True):
        user = super().save(commit=False)
        
        if commit:
            user.save()
        return user


# Дополнительные поля для регистрации.
class UserProfileForm(forms.ModelForm):

    # Здесь задаются начальные настройки для поля телефон.
    phoneNumber = PhoneNumberPrefixWidget(initial='RU')
    phoneNumber = forms.CharField(label='Телефон',
                                  widget=forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'Телефон'}))

    # Здесь задаются начальные настройки для поля город.
    city = forms.CharField(label='Город',
                           widget=forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'Город'}))

    class Meta:

        # Свойство модели User.
        model = UserProfile

        # Свойство назначения полей.
        fields = ('phoneNumber', 'city')


# Форма для авторизации.
class LoginUserFrom(AuthenticationForm):

    # Здесь задаются начальные настройки для поля логин.
    username = forms.CharField(label='Логин',
                               widget=forms.TextInput(attrs={'class': 'form-input'}))

    # Здесь задаются начальные настройки для поля пароль.
    password = forms.CharField(label='Пароль',
                               widget=forms.PasswordInput(attrs={'class': 'form-input'}))
