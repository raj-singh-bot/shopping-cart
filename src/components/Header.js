import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaShoppingCart} from 'react-icons/fa'

const Header = () => {
  return (
    <Navbar  bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"> 
            <Nav.Link href="#features">Jewellery</Nav.Link>
            <Nav.Link href="#pricing">Electronics</Nav.Link>
            <NavDropdown title="Clothing" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mens Clothing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Womens Clothing
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><FaShoppingCart/></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header