import axios from 'axios'
import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

const UpdateModal = ({ book, event }) => {
  const { id, titulo, autor, editorial, isbn, impresion } = book
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSubmit = evt => {
    evt.preventDefault()

    const data = new FormData(evt.target)
    const book = {
      titulo: data.get('titulo'),
      autor: data.get('autor'),
      editorial: data.get('editorial'),
      isbn: data.get('isbn'),
      impresion: data.get('impresion'),
    }

    axios
      .put(`${process.env.REACT_APP_API_URL}/books/${id}`, book)
      .then(response => event())

    handleClose()
  }

  return (
    <>
      <Button
        variant='secondary'
        onClick={handleShow}
        className='bi bi-pencil-fill me-1'
        title='Actualizar'
      />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ACTUALIZAR</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label className='mb-1' htmlFor='titulo'>
                Titulo
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Titulo'
                id='titulo'
                name='titulo'
                defaultValue={titulo}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className='mb-1' htmlFor='autor'>
                Autor
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Autor'
                id='autor'
                name='autor'
                defaultValue={autor}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className='mb-1' htmlFor='editorial'>
                Editorial
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Editorial'
                id='editorial'
                name='editorial'
                defaultValue={editorial}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className='mb-1' htmlFor='isbn'>
                ISBN
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='ISBN'
                id='isbn'
                name='isbn'
                defaultValue={isbn}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className='mb-1' htmlFor='impresion'>
                Fecha de Impresion
              </Form.Label>
              <Form.Control
                type='date'
                id='impresion'
                name='impresion'
                defaultValue={impresion}
              />
            </Form.Group>
            <Button variant='primary' type='submit' className='ps-3 pe-3'>
              Añadir
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary'>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateModal
