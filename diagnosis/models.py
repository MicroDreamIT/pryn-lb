from django.db import models
from patient.models import Patient
from doctor.models import Doctor
from tests.models import Tests


class Diagnosis(models.Model):
    date = models.DateTimeField(auto_now=True)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, default=0)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, default=0)
    is_delivered = models.BooleanField(default=False)
    updated_on = models.DateTimeField(auto_now=True)
    mobile = models.CharField(max_length=25, null=True)


class Item(models.Model):
    type = models.CharField(max_length=255)
    test = models.ForeignKey(Tests, on_delete=models.CASCADE)
    result = models.CharField(max_length=255)
    lab_no = models.CharField(max_length=255, null=True)


def __str__(self):
        return self.test_name
