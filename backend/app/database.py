from peewee import *
from decouple import config


database = MySQLDatabase(
    database=config('MYSQLDATABASE'),
    host=config('MYSQLHOST'),
    user=config('MYSQLUSER'),
    password=config('MYSQLPASSWORD'),
    port=int(config('MYSQLPORT'))
)
