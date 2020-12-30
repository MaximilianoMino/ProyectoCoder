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
  
  console.log(categories)
  return (
    <>
      {" "}
      <Navbar
        variant="light"
        collapseOnSelect
        expand="lg"
        className="container-fluid sticky-top bg-light"
      >    <img
            src="../../assets/images/logo.png"
            width="10px"
            height="10px"
            alt="sdfsdf"
          />
        <Link to="/cart">
          <CartIcon />
        </Link>
        <Link to="/">
      
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
            {categories
              ? categories.map((e) => {
                  return (
                    <NavLink
                      key={e.id}
                      className="navbar-text mx-2"
                      to={`/categories/${e.id}`}
                    >
                      {e.name}
                    </NavLink>
                  );
                })
              : ""}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
