from fastapi import APIRouter, HTTPException
from datetime import datetime

from app.models.bookModel import Book
from app.schemas.bookSchema import BookRequestModel, BookResponseModel


router = APIRouter()


@router.get("/books")
async def get_books():
    books = Book.select()

    return [BookResponseModel(**book.__data__) for book in books]


@router.get("/books/{book_id}")
async def get_book(book_id: int):
    book = Book.select().where(Book.id == book_id).first()

    if book:
        return BookResponseModel(**book.__data__)
    else:
        return HTTPException(status_code=404, detail="Book not found")


@router.post("/books")
async def create_book(book: BookRequestModel):
    book = Book.create(**book.dict(), created_at=datetime.now())

    return f'New book created with id: {book}'


@router.put("/books/{book_id}")
async def update_book(book_id: int, new_book: BookRequestModel):
    book = Book.select().where(Book.id == book_id).first()

    if book:
        Book.update(**new_book.dict(), updated_at=datetime.now()
                    ).where(Book.id == book_id).execute()

        return f'Book with id: {book} updated'
    else:
        return HTTPException(status_code=404, detail="Book not found")


@router.delete("/books/{book_id}")
async def delete_book(book_id: int):
    book = Book.select().where(Book.id == book_id).first()

    if book:
        book.delete_instance()
        return f'Book with id: {book_id} deleted'
    else:
        return HTTPException(status_code=404, detail="Book not found")
