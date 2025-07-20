from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserCredentialsManager(BaseUserManager):
    def create_user(self, name, email, password=None):
        if not email:
            raise ValueError("Email is required")
        user = self.model(name=name, email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)
        return user

class UserCredentials(AbstractBaseUser):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    objects = UserCredentialsManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email
