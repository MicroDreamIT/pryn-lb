from django.db import models


class Diagnosis(models.Model):
    name = models.CharField(max_length=30)
    result = models.CharField(max_length=30)
    opinion = models.TextField(null=True)
    advice = models.TextField(null=True)
    refer_by = models.CharField(max_length=50, null=True)
    unit = models.CharField(max_length=10, null=True)
    range = models.CharField(max_length=30, null=True)


def __str__(self):
        return self.test_name
