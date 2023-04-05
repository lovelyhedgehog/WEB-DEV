from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=200)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }


class Product(models.Model):
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=100, default="None")
    price = models.FloatField(default=0)
    description = models.TextField(default='')
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
        }