export class Book {
  id = ''
  isbn = ''
  autor = ''
  titulo = ''
  editorial = ''
  impresion = ''
  created_at = ''
  updated_at = ''

  constructor({
    id,
    isbn,
    autor,
    titulo,
    editorial,
    impresion,
    created_at,
    updated_at,
  }) {
    this.id = id
    this.isbn = isbn
    this.autor = autor
    this.titulo = titulo
    this.editorial = editorial
    this.impresion = impresion
    this.created_at = created_at
    this.updated_at = updated_at
  }
}
