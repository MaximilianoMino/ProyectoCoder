import React from "react";
import Button from "../button/Button";
import "./card.scss";
const Card = ({ thumbnail, title, price, id }) => {
  return (
    <div className="product-container">
      <div className="product-top">
        <img src={thumbnail} alt={title} />
      </div>

      <div className="product-bottom text-center">
        <h3>{title}</h3>
        <h5>$ {price}</h5>
      </div>

      <Button goTo={`/detalle/${id}`} value="Ver detalle" />
    </div>
  );
};

export default Card;
