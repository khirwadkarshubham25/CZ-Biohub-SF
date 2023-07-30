from django.db import models


class FibonacciSeries(models.Model):
    number = models.BigIntegerField(primary_key=True)
    series = models.CharField(max_length=2000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fibonacci_series'
