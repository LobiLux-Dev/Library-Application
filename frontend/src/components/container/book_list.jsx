import React from 'react'
import { Table } from 'react-bootstrap'
import BookComponent from '../pure/book'
import AddModal from '../pure/add_modal'

const BookListComponent = ({ books, event }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Editorial</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <BookComponent key={book.id} book={book} event={event} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='5'>
              <AddModal event={event} />
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}

export default BookListComponent
