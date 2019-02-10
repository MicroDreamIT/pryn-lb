from django.db import models


class Tests(models.Model):
    name = models.CharField(max_length=40)
    unit = models.CharField(max_length=10, null=True)
    range = models.CharField(max_length=30, null=True)


def __str__(self):
        return self.name
