import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import {  Container,  Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import CartIcon from './icon/CartIcon'
import './NavBar.css'


const styleNavBar={
    backgroundColor:"#F6C2A7",
    fontSize:15,
    color:"pink !important"
  }
  


const navBar = () => {

  const activeStyle={
   color: "#AD7E47",
  };
    return (
        <Navbar style={styleNavBar} expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to ="/">
            Mi Tienda
            </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link>
              <NavLink to="/item/:id" style={({isActive})=>(isActive ? activeStyle: undefined) }>
                 Detalle
                </NavLink>
                </Nav.Link> 
                <NavDropdown  title="Que comemos?" id="navbarScrollingDropdown" >
                <NavDropdown.Item >
                  <NavLink style={({isActive})=>(isActive ? activeStyle: undefined)} to= "category/dulces">
                    Dulces Saludables
                    </NavLink>
                   </NavDropdown.Item>
                <NavDropdown.Item >
                  <NavLink style={({isActive})=>(isActive ? activeStyle: undefined)} to= "category/salados">
                  Salados Saludables
                  </NavLink>
                  </NavDropdown.Item>

              </NavDropdown>
              </Nav>
          </Navbar.Collapse>
          <NavLink to='/cart'>
          <CartIcon className="cart-icon"/>
          </NavLink>
          
        </Container>
      </Navbar>
    )
}

export default navBar
