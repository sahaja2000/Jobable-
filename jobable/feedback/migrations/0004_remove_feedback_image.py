# Generated by Django 3.2 on 2021-05-07 13:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('feedback', '0003_feedback'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='feedback',
            name='image',
        ),
    ]
