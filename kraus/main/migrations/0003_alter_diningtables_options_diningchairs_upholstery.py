# Generated by Django 4.0.3 on 2022-07-13 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_bedsidetables_coffeetables_consoles_diningchairs_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='diningtables',
            options={'verbose_name': 'Обеденный стол', 'verbose_name_plural': 'Обеденные столы'},
        ),
        migrations.AddField(
            model_name='diningchairs',
            name='upholstery',
            field=models.CharField(default='', max_length=250, verbose_name='Обивка'),
        ),
    ]