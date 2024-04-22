from django.db import models

# Create your models here.
class Company(models.Model):
    id = models.IntegerField(primary_key=True)  # Поле id будет теперь primary key
    name = models.CharField(max_length=255)
    description = models.TextField(default='')
    city = models.CharField(max_length=255)
    address = models.TextField(default='')

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Company'

    def __str__(self):
        return f'{self.id}. Company name: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default='')
    salary = models.FloatField(max_length=255)
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE)
    raiting = models.IntegerField()

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancy'

    def __str__(self):
        return f'{self.id}. Vacancy name: {self.name}'

    # def to_json(self):
    #     return {
    #         'id': self.id,
    #         'name': self.name,
    #         'description': self.description,
    #         'salary': self.salary,
    #         'company_id': self.company_id.id,
    #         'raiting': self.raiting,
    #     }