# Generated by Django 5.0.4 on 2024-04-22 14:11

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aviato', '0003_alter_tikets_arrival_date_alter_tikets_arrival_time_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tikets',
            name='Acc_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='aviato.account'),
        ),
    ]