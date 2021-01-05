import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './item.scss'
const Item = ({ thumbnail, price, id, title }) => {



  return (
   <>
    <div className="container my-3 d-inline-flex col-md-4">
      <div className="row  d-flex justify-content-center">
        <div className="shadow product-container p-3">
          <div className="product-top">
            <img src={thumbnail} alt={title} className="mr-2 my-4 shadow img-fluid mh-100"/>
           
          </div>

           <div className="product-bottom text-center">
              <h3>{title}</h3>
              <h5>$ {price}</h5>
           </div> 
           <Link to={`/detalle/${id}`}>
           <Button className="btn-block btn-dark my-4">Ver detalle</Button>
           </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Item;
