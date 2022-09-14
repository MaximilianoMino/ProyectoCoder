import React from "react";
import useCartContext from "../../context/CartContext";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./cart.scss";
import Button from "./button/Button";

const flyer = {
  backgroundImage:
    "url(https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
  width: "100%",
  height: "100vh",
  backgroundPosition: "bottom",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
};

const style = {
  minHeight: "70px",
  minWidth: "200",
  maxHeight: "80px",
  maxWidth: "100px",
};
const Cart = () => {
  const { productArray, clearCart, deleteProduct, getGrandTotal } =
    useCartContext();

  const handleDel = (p) => {
    deleteProduct(p.id);
  };

  return (
    <>
      <div style={flyer}></div>
      {/* <UserForm /> */}
      {productArray.length === 0 ? (
        <div>
          <p className="ml-4 mt-3">
            No tienes productos en el carrito de compras
          </p>
          <p className="ml-4">
            Haga clic{" "}
            <Link to="/" className="font-weight-bold">
              aqui
            </Link>{" "}
            para continuar haciendo compras
          </p>
        </div>
      ) : (
        <div className="p-5 cart-container">
          <Table responsive="sm">
            <thead>
              <tr>
                <th className="px-5" style={style}>
                  #
                </th>
                <th className="px-4 text-center">PRODUCTO</th>
                <th className="px-4 text-center">PRECIO</th>
                <th className="px-4 text-center">CANTIDAD</th>
              </tr>
            </thead>
            {productArray.map((product) => (
              <tbody key={product.id} className="text-center">
                <tr>
                  <td className="px-4 text-center" style={style}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      style={style}
                      className="img-fluid card-img"
                    />
                  </td>
                  <td className="px-4 text-center">{product.title}</td>
                  <td className="px-4 text-center">$ {product.price}</td>
                  <td className="px-4 text-center">
                    {product.quantity}

                    <FontAwesomeIcon
                      onClick={() => handleDel(product)}
                      className="h4 pb-2 ml-4 mx-1 trash-icon position-absolute"
                      icon={faTrash}
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>

          <div className="text-left">
            <button className="text-left h5 btn btn-danger" onClick={clearCart}>
              Borrar todos los productos
            </button>
          </div>

          <div className="col-12 d-flex justify-content-between mt-5">
            <div className="mr-auto">
              <Button icon={faShoppingBasket} text="Continuar" goTo="/" />
            </div>
            <div className="m-auto pr-5">
              <p className="pr-5 h3">Total ${getGrandTotal()} ARS</p>
            </div>
            <div>
              <Button icon={faCreditCard} text="Comprar" goTo="/order" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
