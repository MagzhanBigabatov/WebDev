# Generated by Django 5.0.4 on 2024-04-17 18:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_company_options_alter_vacancy_options_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='vacancy',
            old_name='company',
            new_name='company_id',
        ),
    ]
