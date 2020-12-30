import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import "@fortawesome/fontawesome-svg-core";
import useCartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addProductToCart } = useCartContext();

  const handleProductArray = () => {
    addProductToCart(product, add);
  };
console.log(product)
  const [add, setAdd] = useState(1);

  const onAdd = (value) => {
    setAdd(value);
  };

  return (
    <>
      <div>
        <h2 className="text-center bg-light mt-4">DETALLE DEL PRODUCTO</h2>
      </div>

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
          <div className="col-sm-6 col-12 mt-3">
            <Table responsive className="text-center">
              <thead>
                <tr>
                  <th>{product.title}</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" font-weight-bold">$ {product.price}</tr>
                <tr className="font-weight-bold">
                  Caracteristicas del producto:{" "}
                </tr>
              </tbody>
              <ul className="list-group my-1">
                <li className="mt-1">{product.description1}</li>
                <li className="my-1">{product.description2}</li>
                <li className="my-1">{product.description3}</li>
                <li>{product.description4}</li>
                <li className="my-1">{product.description5}</li>
                <li className="my-1">{product.description6}</li>
              </ul>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
