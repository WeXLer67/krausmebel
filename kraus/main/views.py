from django.shortcuts import render, redirect
from .models import *
from .forms import *
from django.contrib.auth.views import LoginView
from django.contrib.auth import logout, login, authenticate
from .telegramm import *

# Create your views here.


# Главная страница.
def index(request):
    return render(request, 'main/Главная страница.html')


# Страница категории диваны.
def sofas(request):
    sof = Sofas.objects.all()

    # Заявка для телеграм бота.
    if request.method == 'POST':
        form = CommunicationForm(request.POST)

        # Проверка на валидность формы.
        if form.is_valid():
            mail = form.cleaned_data['email']
            phone = form.cleaned_data['phoneNumber']
            message = "*ЗАЯВКА С САЙТА*:" + "\n" + "*ПОЧТА*: " + str(mail) + "\n" + "*ТЕЛЕФОН*: " + str(phone)
            send_message(message)
            return redirect('main')
    else:
        form = CommunicationForm()
    return render(request, 'main/Sofas.html', {'sof': sof, 'form': form})


# Страница категории стелажи.
def shelving(request):
    sh = Shelving.objects.all()
    if request.method == 'POST':
        form = CommunicationForm(request.POST)
        if form.is_valid():
            mail = form.cleaned_data['email']
            phone = form.cleaned_data['phoneNumber']
            message = "*ЗАЯВКА С САЙТА*:" + "\n" + "*ПОЧТА*: " + str(mail) + "\n" + "*ТЕЛЕФОН*: " + str(phone)
            send_message(message)
            return redirect('main')
    else:
        form = CommunicationForm()
    return render(request, 'main/Shelving.html', {"sh": sh, 'form': form})


# Страница контакты.
def contacts(request):
    return render(request, 'main/Контакты.html')


# Страница категории обеденных столов.
def diningtables(request):
    pr = Diningtables.objects.all()
    if request.method == 'POST':
        form = CommunicationForm(request.POST)
        if form.is_valid():
            mail = form.cleaned_data['email']
            phone = form.cleaned_data['phoneNumber']
            message = "*ЗАЯВКА С САЙТА*:" + "\n" + "*ПОЧТА*: " + str(mail) + "\n" + "*ТЕЛЕФОН*: " + str(phone)
            send_message(message)
            return redirect('main')
    else:
        form = CommunicationForm()
    return render(request, 'main/Обеденные столы.html', {"pr": pr, "form": form})


# Страница категории журнальные столики.
def coffeetables(request):
    cof = Coffeetables.objects.all()
    if request.method == 'POST':
        form = CommunicationForm(request.POST)
        if form.is_valid():
            mail = form.cleaned_data['email']
            phone = form.cleaned_data['phoneNumber']
            message = "*ЗАЯВКА С САЙТА*:" + "\n" + "*ПОЧТА*: " + str(mail) + "\n" + "*ТЕЛЕФОН*: " + str(phone)
            send_message(message)
            return redirect('main')
    else:
        form = CommunicationForm()
    return render(request, 'main/Журнальные столики.html', {"cof": cof, "form": form})


# Страница категории обеденные кресла.
def diningchairs(request):
    din = Diningchairs.objects.all()
    if request.method == 'POST':
        form = CommunicationForm(request.POST)
        if form.is_valid():
            mail = form.cleaned_data['email']
            phone = form.cleaned_data['phoneNumber']
            message = "*ЗАЯВКА С САЙТА*:" + "\n" + "*ПОЧТА*: " + str(mail) + "\n" + "*ТЕЛЕФОН*: " + str(phone)
            send_message(message)
            return redirect('main')
    else:
        form = CommunicationForm()
    return render(request, 'main/Обеденные стулья.html', {"din": din, "form": form})


# Страница категории пувы и банкетки.
def poufsandbanquettes(request):
    pou = Poufs.objects.all()
    if request.method == 'POST':
        form = CommunicationForm(request.POST)
        if form.is_valid():
            mail = form.cleaned_data['email']
            phone = form.cleaned_data['phoneNumber']
            message = "*ЗАЯВКА С САЙТА*:" + "\n" + "*ПОЧТА*: " + str(mail) + "\n" + "*ТЕЛЕФОН*: " + str(phone)
            send_message(message)
            return redirect('main')
    else:
        form = CommunicationForm()
    return render(request, 'main/Пуфы и банкетки.html', {"pou": pou, "form": form})


# Страница категории тумбы.
def bedsidetable(request):
    bed = Bedsidetables.objects.all()
    if request.method == 'POST':
        form = CommunicationForm(request.POST)
        if form.is_valid():
            mail = form.cleaned_data['email']
            phone = form.cleaned_data['phoneNumber']
            message = "*ЗАЯВКА С САЙТА*:" + "\n" + "*ПОЧТА*: " + str(mail) + "\n" + "*ТЕЛЕФОН*: " + str(phone)
            send_message(message)
            return redirect('main')
    else:
        form = CommunicationForm()
    return render(request, 'main/Тумбы.html', {"bed": bed, "form": form})


# Страница категории консоли.
def consoles(request):
    con = Consoles.objects.all()
    if request.method == 'POST':
        form = CommunicationForm(request.POST)
        if form.is_valid():
            mail = form.cleaned_data['email']
            phone = form.cleaned_data['phoneNumber']
            message = "*ЗАЯВКА С САЙТА*:" + "\n" + "*ПОЧТА*: " + str(mail) + "\n" + "*ТЕЛЕФОН*: " + str(phone)
            send_message(message)
            return redirect('main')
    else:
        form = CommunicationForm()
    return render(request, 'main/Консоли.html', {"con": con, "form": form})


# Страница категории кресла.
def chairs(request):
    ch = Chairs.objects.all()
    if request.method == 'POST':
        form = CommunicationForm(request.POST)
        if form.is_valid():
            mail = form.cleaned_data['email']
            phone = form.cleaned_data['phoneNumber']
            message = "*ЗАЯВКА С САЙТА*:" + "\n" + "*ПОЧТА*: " + str(mail) + "\n" + "*ТЕЛЕФОН*: " + str(phone)
            send_message(message)
            return redirect('main')
    else:
        form = CommunicationForm()
    return render(request, 'main/Кресла.html', {"ch": ch, "form": form})


# Страница акции.
def sales(request):
    return render(request, 'main/sales.html')


# Страница сотрудничество.
def cooperation(request):
    return render(request, 'main/Cooperation.html')


# Страница доставкак и оплата.
def shipping_and_payment(request):
    return render(request, 'main/Доставка и оплата.html')


# Страница с новостью.
def new1(request):
    return render(request, 'main/Новость 1.html')


# Страница с регистрацией и автоматическим логином
def registration(request):

    # Проверка на запрос.
    if request.method == 'POST':
        form = RegisterUser(request.POST)
        profile_form = UserProfileForm(request.POST)

        # Проверка форм на валидность.
        if form.is_valid() and profile_form.is_valid():
            user = form.save()

            profile_user = profile_form.save(commit=False)
            profile_user.user = user
            profile_user.save()
            
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            
            user = authenticate(username=username, password=password)
            login(request, user)
            
            return redirect('profile')
    else:
        form = RegisterUser()
        profile_form = UserProfileForm()
    
    context = {'form': form, 'profile_form': profile_form}
    return render(request, 'main/registration.html', context)


# Страница с профилем пользователя
def profile(request):
    return render(request, 'main/Profile.html')


# Страница с авторизацией пользователя
class LoginUser(LoginView):
    form_class = LoginUserFrom
    template_name = 'main/Login.html'


# Логаут из акаунта
def logout_user(request):
    logout(request)
    return redirect('main')
    