# -*- coding: utf-8 -*-
import os, sys
sys.path.insert(0, '/var/www/u1627618/data/www/krausmebel.ru/kraus')
sys.path.insert(1, '/var/www/u1627618/data/djangoenv/lib/python3.10/site-packages')
os.environ['DJANGO_SETTINGS_MODULE'] = 'kraus.settings'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
