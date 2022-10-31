import React from 'react'
import DeleteModal from './delete_modal'
import UpdateModal from './update_modal'
import ViewModal from './view_modal'

const BookComponent = ({ book, event }) => {
  const { id, titulo, autor, editorial } = book

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{titulo}</td>
        <td>{autor}</td>
        <td>{editorial}</td>
        <td>
          <UpdateModal book={book} event={event} />
          <ViewModal book={book} event={event} />
          <DeleteModal book={book} event={event} />
        </td>
      </tr>
    </>
  )
}

export default BookComponent
