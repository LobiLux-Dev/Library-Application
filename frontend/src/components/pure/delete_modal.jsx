import axios from 'axios'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const DeleteModal = ({ event, book }) => {
  const { id, titulo, autor, editorial } = book
  const [show, setShow] = useState(false)

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/books/${id}`).then(() => event())
    handleClose()
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        variant='danger'
        onClick={handleShow}
        className='bi bi-trash-fill'
        title='Eliminar'
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className='bi bi-exclamation-triangle-fill'></i> BORRAR
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Estas seguro de querer borrar el siguiente libro:</p>
          <div>
            <div>
              <span className='fw-bold'>ID:</span> {id}
            </div>
            <div>
              <span className='fw-bold'>Titulo:</span> {titulo}
            </div>
            <div>
              <span className='fw-bold'>Autor:</span> {autor}
            </div>
            <div>
              <span className='fw-bold'>Editorial:</span> {editorial}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant='danger' onClick={handleDelete}>
            Borrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteModal
