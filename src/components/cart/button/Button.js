import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ icon, goTo, text }) => {
  console.log(text);
  return (
    <Link to={goTo}>
      <button className=" btn-dark">
        {text} <FontAwesomeIcon icon={icon} className="ml-2" />
      </button>
    </Link>
  );
};

export default Button;
