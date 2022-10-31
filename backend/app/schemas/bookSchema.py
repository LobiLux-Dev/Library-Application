from datetime import date, datetime
from typing import Optional, Union
from pydantic import BaseModel


class BookRequestModel(BaseModel):
    titulo: str
    isbn: Optional[str] = None
    autor: Optional[str] = None
    editorial: Optional[str] = None
    impresion: Optional[date] = None


class BookResponseModel(BookRequestModel):
    id: int
    created_at: Union[datetime, str]
    updated_at: Union[datetime, str]
