import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookListComponent from './components/container/book_list'

const Books = () => {
  const [books, setBooks] = useState([])

  const getBooks = () => {
    axios.get('http://localhost:8000/books').then(response => {
      setBooks(response.data)
    })
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div>
      <h1 className='text-center'>Libros</h1>
      <h5>Cantidad: {books.length} libros</h5>
      <BookListComponent books={books} event={getBooks} />
    </div>
  )
}

export default Books
