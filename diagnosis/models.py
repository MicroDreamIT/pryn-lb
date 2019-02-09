from django.db import models

class diagnosis(models.Model):
    test_name = models.CharField(max_length=40)
    test_unit = models.CharField(max_length=10, null=True)
    test_range = models.CharField(max_length=30, null=True)
