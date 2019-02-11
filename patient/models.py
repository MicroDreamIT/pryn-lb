from django.db import models


class Patient(models.Model):
    name = models.CharField(max_length=50)
    age = models.CharField(max_length=3)
    gender = models.CharField(choices=[('BIG', 'Larger')], null=True, max_length=10)
    ref_no = models.CharField(max_length=15)
    care_of = models.CharField(max_length=50, null=True)
    address = models.TextField(max_length=100, null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now_add=True)
    mobile = models.CharField(max_length=20, null=True)

    def __str__(self):
        return self.name