# Generated by Django 4.1 on 2022-11-29 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_remove_product_digital_remove_product_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='likes_count',
            field=models.IntegerField(default=0),
        ),
    ]
