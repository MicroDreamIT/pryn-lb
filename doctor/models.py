from django.db import models


class Doctor(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50, null=True)
    mobile = models.CharField(max_length=20, null=True)


def __str__(self):
        return self.name
