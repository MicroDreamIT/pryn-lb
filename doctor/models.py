from django.db import models


class Doctor(models.Model):
    dr_name = models.CharField(max_length=30)
    dr_email = models.CharField(max_length=40, null=True)
    dr_mobile = models.CharField(max_length=25, null=True)


def __str__(self):
        return self.dr_name
