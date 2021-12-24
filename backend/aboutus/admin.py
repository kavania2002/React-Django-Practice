from django.contrib import admin
from .models import *

# Register your models here.
class aboutUsAdmin(admin.ModelAdmin):
    list = ('name', 'photo', 'email', 'content')

admin.site.register(People, aboutUsAdmin)