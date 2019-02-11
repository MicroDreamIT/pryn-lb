from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=50)
    sub_name = models.CharField(max_length=50, null=True)
    address = models.TextField(max_length=100)
    email = models.CharField(max_length=50, null=True)
    mobile = models.CharField(max_length=20)


def __str__(self):
        return self.name
