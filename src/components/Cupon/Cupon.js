import React from "react";
import "./cupon.scss";
import { Link } from "react-router-dom";
const Cupon = ({ cupon }) => {
  return (
    <>
     <div className="d-flex justify-content-end p-3">
       <Link to="/">
        <button className=" btn btn-dark">Continuar comprando</button>
        </Link>
      </div>
      <div className="cuponContainer">
        <p className="h1 text-center">¡Muchas gracias por tu compra!</p>
        <p className="h3 text-center">Comprobante de compra N°: </p>
        <div class="ticket">
          <div data-number="¡Gracias!">{cupon}</div>
        </div>
        <div class="ticket">
          <div data-number="¡Gracias!">{cupon}</div>
        </div>
      </div>
     
    </>
  );
};

export default Cupon;
