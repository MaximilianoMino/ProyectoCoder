import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartIcon from '../CartIcon/CartIcon';

const bgNavBar = {
 backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"}

const NavBar = () => {

return <>
  <Navbar style={bgNavBar} variant="light" collapseOnSelect expand="lg" className="container-fluid sticky-top">
   <CartIcon/> <Navbar.Brand className="mr-auto">TIEND-APP</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#productos">Productos</Nav.Link>
      <Nav.Link href="#miCarrito">Mi Carrito</Nav.Link>
    

     </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Busca tu producto.." className="mr-sm-2"/>
      <Button variant="dark" className="mt-2 mt-sm-0">Buscar</Button>
    </Form>
   </Navbar.Collapse>
  </Navbar>
 
</>

}

export default NavBar;