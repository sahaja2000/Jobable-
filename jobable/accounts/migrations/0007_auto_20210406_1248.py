# Generated by Django 3.0.7 on 2021-04-06 07:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_seekeradditionaldetails_work_experience'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recruiter',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='recruiter/'),
        ),
        migrations.AlterField(
            model_name='seeker',
            name='address',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
