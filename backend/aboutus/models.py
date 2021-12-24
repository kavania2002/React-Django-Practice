from django.db import models

# Create your models here.
class People(models.Model):
    name = models.CharField(max_length=200)
    photo = models.ImageField(upload_to='images/', blank=True)
    email = models.EmailField()
    content = models.TextField()

    def __str__(self):
        return self.name

