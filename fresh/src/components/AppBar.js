import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppBar = () => {

  return (
    <Navbar expand="xl" >
      <Container>
        <Navbar.Brand as={Link} to="/"><h2 style={{color:"#87C75C"}}>FRESHIFY</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-start' id="basic-navbar-nav">
          <Nav variant="underline" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link as={Link} to="/home" className={ 'text-light fw-bold'}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/trips" className={ 'text-light fw-bold'}>Trips</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/warning" className={ 'text-light fw-bold'}>Warning</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/support" className={ 'text-light fw-bold'}>Support</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;