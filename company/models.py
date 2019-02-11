from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=40)
    sub_name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    email = models.CharField(max_length=40, null=True)
    mobile = models.CharField(max_length=25, null=True)


def __str__(self):
        return self.name
