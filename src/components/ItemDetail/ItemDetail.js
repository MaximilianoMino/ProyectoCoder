import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "@fortawesome/fontawesome-svg-core";
import useCartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import './itemdetail.scss'

const ItemDetail = ({ product }) => {
  const { addProductToCart } = useCartContext();

  

  const handleProductArray = () => {
    addProductToCart(product, add);
  };
  console.log(product);
  const [add, setAdd] = useState(1);

  const onAdd = (value) => {
    setAdd(value);
  };

  return (
    <>
      <div className="divContainer">
        <h2 className="text-center mt-4">DETALLE DEL PRODUCTO</h2>

        <div className="container mt-5 shadow">
          <div className="row">
            <div className="col-sm-6 col-12 d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="m-4">
                  <Card.Img
                    variant="top"
                    src={product.thumbnail}
                    className="img-fluid"
                  />
                </Card>
              </div>
              <ItemCount initial={1} max={10} min={1} onAdd={onAdd} />

              <Link to="/cart">
                <Button
                  className="btn btn-block btn-dark my-3"
                  onClick={handleProductArray}
                >
                  Añadir {add} al carrito
                </Button>
              </Link>
            </div>
            <div className="col-sm-6 col-12 mt-3 text-center pb-3">
              ´<h5>{product.title}</h5>
              <h6>Caracteristicas del producto:</h6>
              <ul className="list-group my-1 list-unstyled">
                <li className="my-2">{product.description1}</li>
                <li className="my-2">{product.description2}</li>
                <li className="my-2">{product.description3}</li>
                <li>{product.description4}</li>
                <li className="my-2">{product.description5}</li>
                <li className="my-2">{product.description6}</li>
              </ul>
              <h5>$ {product.price}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
