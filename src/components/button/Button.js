import React from "react";
import { Link } from "react-router-dom";
import "./button.css";
const Button = ({ goTo, value, event }) => {
  return (
    <>
      <Link to={goTo && goTo} className="link">
        <button className="btn-global" onClick={event && event}>
          <span>{value}</span>
        </button>
      </Link>
    </>
  );
};

export default Button;
