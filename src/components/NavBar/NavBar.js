import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import CartIcon from "../CartIcon/CartIcon";
import { NavLink, Link } from "react-router-dom";
import { getCategories } from "../../firebase/dataBase";
import logo from "../../assets/images/logoo.png";




const NavBar = () => {
  
  const [categories, setCategories] = useState();
 

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
        className="sticky-top bg-light"
      >     
      
       
       <Link to="/cart" className="mx-2">
          <CartIcon />
        </Link> 
        <Navbar.Brand className="m-auto">
 <Link to="/">
      <img
            src={logo}
            width="200px"
            height="50px"
            alt="logo"
          />
        </Link>
      
      </Navbar.Brand>
    
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
      
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">  
            <NavLink
              to="/"
              activeClassName="selected"
              className="navbar-text h5 text-dark mx-2"
            >
              Home
            </NavLink>
            {categories
              ? categories.map((e) => {
                  return (
                    <NavLink
                      key={e.id}
                      className="navbar-text h5 text-dark mx-2"
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
