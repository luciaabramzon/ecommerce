import React from 'react'
import {  Container,  Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { CartWidjet } from './cart/CartWidjet'
import './Estilos.css'

  
  const navBar = () => {

  const activeStyle={
   color: "#AD7E47",
  };
    return (
        <Navbar className='styleNavBar' expand="lg">
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
                <Nav.Link>
                <NavLink to="/ofertas" style={({isActive})=>(isActive ? activeStyle: undefined) }>
                 Ofertas
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
          <CartWidjet className='class-icon'/>
          </NavLink>
       </Container>
      </Navbar>
    )
}

export default navBar
