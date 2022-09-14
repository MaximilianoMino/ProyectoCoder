import React from "react";
import { Link } from "react-router-dom";

const Button = ({ icon, goTo, text }) => {
  console.log(text);
  return (
    <Link to={goTo}>
      <button className=" btn-dark">
        {text} {icon}
      </button>
    </Link>
  );
};

export default Button;
