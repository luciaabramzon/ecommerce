import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import {  Container,  Nav, Navbar, NavDropdown } from 'react-bootstrap'
import CartIcon from './icon/CartIcon'

const styleNavBar={
    backgroundColor:"#F6C2A7",
    fontSize:15,
    color:"pink !important"
  }
  


const navBar = () => {
    return (
        <Navbar style={styleNavBar} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" >Mi Tienda</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Inicio</Nav.Link>
              <Nav.Link href="#action2">Nostros</Nav.Link>
              <NavDropdown  title="Que comemos?" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"> Dulces Saludables</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Salados Saludables</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Todos Saludables
                </NavDropdown.Item>
              </NavDropdown>
              </Nav>
          </Navbar.Collapse>
          <CartIcon className="cart-icon"/>
        </Container>
      </Navbar>
    )
}

export default navBar
