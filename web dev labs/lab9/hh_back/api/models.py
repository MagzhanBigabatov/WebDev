from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=255, default='')

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Product(models.Model):
    name = models.CharField(max_length=255, default='')
    price = models.FloatField(default=0)
    description = models.TextField(default='')
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
            'category_id': self.category.id,
        }
    

class Company(models.Model):
    name = models.CharField(max_length=255, default='')  # Provide a default value for name
    description = models.TextField(default='')
    city = models.CharField(max_length=255, default='')
    address = models.TextField(default='')

    def to_json(self):
        return{
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=255, default='')
    description = models.TextField(default='')
    salary = models.FloatField(default=0)
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE, default=1)
    rating = models.IntegerField(default=0)

    def to_json(self):
        return{
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company_id': self.company_id.id,
            'rating': self.rating,
        }




