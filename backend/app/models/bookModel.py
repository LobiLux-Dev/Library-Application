from peewee import *

from app.database import database


class Book(Model):
    class Meta:
        database = database
        table_name = 'books'

    def __str__(self):
        return str(self.id)

    id = AutoField()
    isbn = CharField()
    autor = CharField()
    titulo = CharField()
    editorial = CharField()
    impresion = DateField()
    created_at = DateTimeField()
    updated_at = DateTimeField()
