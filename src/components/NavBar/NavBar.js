import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import CartIcon from "../CartIcon/CartIcon";
import { NavLink, Link } from "react-router-dom";
import { getCategories } from "../../firebase/dataBase";



const bgNavBar = {
  backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
};

const NavBar = () => {
  
  const [categories, setCategories] = useState();
  //1 pasada categories = undefined
  //2 pasada categories = [{},{}]

  useEffect(() => {
    getCategories().then((response) => {
      // console.log("**************");
      // console.log(response)
      setCategories(response);
    });
  }, []);
  return (
    <>
      <Navbar
        style={bgNavBar}
        variant="light"
        collapseOnSelect
        expand="lg"
        className="container-fluid sticky-top"
      >
        <Link to="/cart">
          <CartIcon />
        </Link>
        <Link to="/">
          <Navbar.Brand className="ml-3 mt-1">TIEND-APP</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <NavLink
              to="/"
              activeClassName="selected"
              className="navbar-text mx-2"
            >
              Home
            </NavLink>
            {categories ? categories.map((e) =>{
            return (
              <NavLink key={e.id} className="navbar-text mx-2" to={`/${e.id}`}>
                {e.name}
              </NavLink>
            );
              
            }):""}

           
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
