# Generated by Django 5.0.6 on 2024-06-26 22:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adquisiciones', '0002_remove_adquisicion_direccion_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='adquisicion',
            name='activo',
            field=models.BooleanField(default=True),
        ),
    ]
