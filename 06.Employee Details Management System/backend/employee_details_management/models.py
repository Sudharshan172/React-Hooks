from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    designation = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    salary = models.IntegerField()
    date_of_joining = models.DateField()
    last_working_day = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} ({self.email})"
