# Generated by Django 5.0.4 on 2024-04-17 16:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='company',
            options={'verbose_name': 'Company', 'verbose_name_plural': 'Company'},
        ),
        migrations.AlterModelOptions(
            name='vacancy',
            options={'verbose_name': 'Vacancy', 'verbose_name_plural': 'Vacancy'},
        ),
        migrations.RenameField(
            model_name='vacancy',
            old_name='rating',
            new_name='raiting',
        ),
    ]
