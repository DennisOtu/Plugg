# Generated by Django 4.1 on 2023-01-21 17:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0005_rename_seller_product_seller_id_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='seller_id',
            new_name='seller',
        ),
    ]
