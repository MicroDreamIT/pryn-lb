from django.db import models


class Post(models.Model):
    name = models.CharField(max_length=40)
    age = models.CharField(max_length=3)
    sex = models.CharField(max_length=7)
    refer_no = models.TextField(max_length=40)
    # tests = models.CharField(max_length=50)
    # unit = models.CharField(max_length=10)
    # normal_range = models.CharField(max_length=40)
    created_on = models.DateTimeField(auto_now_add=True)


class Comment(models.Model):
    name = models.CharField(max_length=40)
    age = models.CharField(max_length=3)
    sex = models.CharField(max_length=7)
    refer_no = models.TextField(max_length=40)
    # tests = models.CharField(max_length=50)
    # unit = models.CharField(max_length=10)
    # normal_range = models.CharField(max_length=40)
    created_on = models.DateTimeField(auto_now_add=True)