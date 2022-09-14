import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import CartIcon from "../CartIcon/CartIcon";
import { NavLink, Link } from "react-router-dom";
import ProductsService from "../../services/firebase/productsService";
import logo from "../../assets/images/logoo.png";

import "./navbar.scss";
import UserIcon from "./usericon/UserIcon";

const productsService = new ProductsService();

const NavBar = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    productsService.getCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  return (
    <>
      <Navbar
        variant="light"
        collapseOnSelect
        expand="lg"
        className="sticky-top"
        id="navbar"
      >
        <Link to="/cart" className="mx-2">
          <CartIcon />
        </Link>
        <Navbar.Brand className="m-auto">
          <Link to="/">
            <img src={logo} width="200px" height="50px" alt="logo" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <NavLink
              to="/"
              activeclassname="active"
              className="navbar-text text-dark mx-2"
            >
              Home
            </NavLink>
            {categories
              ? categories.map((e, i) => {
                  return (
                    <NavLink
                      key={i}
                      className="navbar-text  text-dark mx-2"
                      to={`/categories/${e.name}`}
                    >
                      {e.name}
                    </NavLink>
                  );
                })
              : ""}

            <Navbar.Brand className="">
              <UserIcon />
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
