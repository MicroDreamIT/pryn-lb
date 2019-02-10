# Generated by Django 2.1.5 on 2019-02-09 06:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('age', models.CharField(max_length=3)),
                ('sex', models.CharField(choices=[('BIG', 'Larger')], max_length=40, null=True)),
                ('ref_no', models.CharField(max_length=40)),
                ('address', models.TextField(max_length=200, null=True)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]