import React from "react";
//Design
import "./itemdetail.scss";
import Card from "react-bootstrap/Card";
//Logic
import useCartContext from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import useCounter from "../../hooks/useCounter";
import Button from "../button/Button";

const ItemDetail = ({ product }) => {
  const { count, increment, decrement, add } = useCounter();
  const { addProductToCart } = useCartContext();

  const handleProductArray = () => {
    addProductToCart(product, add);
  };

  return (
    <>
      <div className="divContainer">
        <h2 className="text-center mt-5 pt-5">DETALLE DEL PRODUCTO</h2>

        <div className="container py-5">
          <div className="row">
            <div className="col-sm-6 col-12 d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="m-4">
                  <Card.Img
                    variant="top"
                    src={product.thumbnail}
                    className="img-fluid card-img mh-100"
                  />
                </Card>
              </div>
              <ItemCount
                count={count}
                increment={increment}
                decrement={decrement}
              />

              <Button
                goTo="/cart"
                value={`Añadir ${add} al carrito`}
                event={handleProductArray}
              />
            </div>
            <div className="col-sm-6 col-12 mt-3 text-center pb-3">
              <h1>$ {product.price}</h1>
              <hr></hr>
              <h3 className="mr-auto">{product.title}</h3>
              <ul className="list-group my-1 list-unstyled">
                <li className="my-2 mr-auto">
                  {product.description1 && `> ${product.description1}`}
                </li>
                <li className="my-2 mr-auto">
                  {product.description2 && `> ${product.description2}`}
                </li>
                <li className="my-2 mr-auto">
                  {product.description3 && `> ${product.description3}`}
                </li>
                <li className="my-2 mr-auto">
                  {product.description4 && `> ${product.description4}`}
                </li>
                <li className="my-2 mr-auto">
                  {product.description5 && `> ${product.description5}`}
                </li>
                <li className="my-2 mr-auto">
                  {product.description6 && `> ${product.description6}`}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
