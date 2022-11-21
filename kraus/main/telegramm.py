import telepot

# Параметра бота и чата
token = '5518074987:AAGPbjmEIALGjtM6St_OxAJfp7oN5s_kl0s'
my_id = -1001865047465
telegramBot = telepot.Bot(token)


# Функция отправки сообщений (заявок)
def send_message(text):
    telegramBot.sendMessage(-1001865047465, text, parse_mode="Markdown")
