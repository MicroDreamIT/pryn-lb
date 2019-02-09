from django.db import models


class Patient(models.Model):
    name = models.CharField(max_length=80)
    age = models.CharField(max_length=3)
    gender = models.CharField(choices=[('BIG', 'Larger')], null=True, max_length=40)
    ref_no = models.CharField(max_length=40)
    care_of = models.CharField(max_length=80, null=True)
    address = models.TextField(max_length=200, null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now_add=True)


# class Comment(models.Model):
#     name = models.CharField(max_length=40)
#     age = models.CharField(max_length=3)
#     sex = models.CharField(max_length=7)
#     refer_no = models.TextField(max_length=40)
#     # tests = models.CharField(max_length=50)
#     # unit = models.CharField(max_length=10)
#     # normal_range = models.CharField(max_length=40)
#     created_on = models.DateTimeField(auto_now_add=True)