from django.db import models

class Adquisicion(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=255)
    presupuesto = models.DecimalField(max_digits=10, decimal_places=2)
    unidad = models.CharField(max_length=100)
    tipo = models.CharField(max_length=255)
    cantidad = models.IntegerField()
    valor_unitario = models.DecimalField(max_digits=10, decimal_places=2)
    valor_total = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_adquisicion = models.DateField()
    proveedor = models.CharField(max_length=100)
    documentacion = models.TextField()

    def __str__(self):
        return self.nombre

    class Meta:
        app_label = 'adquisiciones'
