import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const ViewModal = ({ book, event }) => {
  const {
    id,
    titulo,
    autor,
    editorial,
    isbn,
    impresion,
    created_at,
    updated_at,
  } = book
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        variant='primary'
        onClick={handleShow}
        className='bi bi-eye-fill me-1'
        title='Ver'
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>DETALLES</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <div>
              <span className='fw-bold'>ISBN:</span> {isbn}
            </div>
            <div>
              <span className='fw-bold'>Fecha de Impresión:</span> {impresion}
            </div>
            <div>
              <span className='fw-bold'>Fecha de Creación:</span> {created_at}
            </div>
            <div>
              <span className='fw-bold'>Fecha de Actualización:</span>{' '}
              {updated_at}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ViewModal
