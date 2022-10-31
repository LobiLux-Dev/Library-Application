from decouple import config
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.models.bookModel import Book
from app.database import database as connection
from app.routes.bookRoute import router as book_router

app = FastAPI()

app.include_router(book_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=config('ORIGINS').split(),
    allow_credentials=True,
    allow_methods=['DELETE', 'GET', 'POST', 'PUT'],
    allow_headers=['*'],
)


@app.on_event("startup")
async def startup_event():
    if connection.is_closed():
        connection.connect()

    connection.create_tables([Book])


@app.on_event("shutdown")
async def shutdown_event():
    if not connection.is_closed():
        connection.close()
