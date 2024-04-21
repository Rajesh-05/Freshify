import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import AppBar from './AppBar'

function Main() {
  return (
    <Container style={{ minWidth: '500px' }} fluid className='primary m-0 p-0 vh-100 vw-100 position-relative'>
        <AppBar className="position-absolute top-0 z-1 "/>
    </Container>
  )
}

export default Main