from django.db import models


class Doctor(models.Model):
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=40, null=True)
    mobile = models.CharField(max_length=25, null=True)


def __str__(self):
        return self.name
