from django.db import models


class Diagnosis(models.Model):
    name = models.CharField(max_length=40)
    result = models.CharField(max_length=40)
    opinion = models.CharField(max_length=100, null=True)
    advice = models.CharField(max_length=100, null=True)
    prepared = models.CharField(max_length=40, null=True)
    checked_by = models.CharField(max_length=40, null=True)
    technician = models.CharField(max_length=40, null=True)
    unit = models.CharField(max_length=10, null=True)
    range = models.CharField(max_length=30, null=True)


def __str__(self):
        return self.test_name
