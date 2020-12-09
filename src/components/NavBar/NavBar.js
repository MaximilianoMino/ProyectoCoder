import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import CartIcon from "../CartIcon/CartIcon";
import { NavLink, Link } from "react-router-dom";

const bgNavBar = {
  backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
};

const NavBar = () => {
  return (
    <>
      <Navbar
        style={bgNavBar}
        variant="light"
        collapseOnSelect
        expand="lg"
        className="container-fluid sticky-top"
      >
        <NavLink to="/cart">
          <CartIcon />
        </NavLink>
        <Link to="/">
          <Navbar.Brand className="ml-3 mt-1">TIEND-APP</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <NavLink to="/" activeClassName="selected" className="navbar-text">
              Home
            </NavLink>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <NavLink to="/cart" className="navbar-text">
              Mi Carrito
            </NavLink>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Busca tu producto.."
              className="mr-sm-2"
            />
            <Button variant="dark" className="mt-2 mt-sm-0">
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
