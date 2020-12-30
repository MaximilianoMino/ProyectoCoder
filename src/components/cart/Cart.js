import React from "react";
import useCartContext from "../../context/CartContext";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import UserForm from "../Form/UserForm";
const Cart = () => {
  const {
    productArray,
    clearCart,
    deleteProduct,
    getGrandTotal,
    historyBack,
  } = useCartContext();

 
  const handleDel = (p) => {
    deleteProduct(p.id);
  };


  const style ={ 
    maxHeight: "200px",
    maxWidth: "200px"
  }

  return (
    <>
      <div>
        <h1 className="text-center">Carrito de compras</h1>
        {/* <UserForm /> */}
        {productArray.length === 0 ? (
          <div>
            <p className="ml-4 mt-3">
              No tienes productos en el carrito de compras
            </p>
            <p className="ml-4">
              Haga clic{" "}
              <Link to="/"  className="font-weight-bold">
                aqui
              </Link>{" "}
              para continuar haciendo compras
            </p>
          </div>
        ) : (
          <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>PRODUCTO</th>
                <th>PRECIO</th>
                <th>CANTIDAD</th>
              </tr>
            </thead>
            {productArray.map((e) => (
              <tbody key={e.id}>
                <tr>
                  <td>
                    <img
                      alt=""
                      title={e.title}
                      src={e.thumbnail}
                      style={style}
                      className="img-fluid card-img mw-50"
                    />
                  </td>
                  <td>{e.title}</td>
                  <td>{e.price}</td>
                  <td>{e.quantity}</td>
                  <td>
                    <FontAwesomeIcon
                      onClick={() => handleDel(e)}
                      className="h4 pb-2 mx-2 my-auto"
                      icon={faTimesCircle}
                    />
                  </td>
                </tr>
              </tbody>
            ))}

            {/* Seccion total */}
            <div className="d-flex col-12 justify-content-between fixed-bottom">
              {/* Todavia no funciona  */}
              <Button className="btn-dark" onClick={historyBack}>
                Volver
              </Button>

              <h3>Total ${getGrandTotal()} ARS</h3>

              <Link to="/">
                <Button className="btn-dark btn-block mr-auto">
                  Continuar comprando
                </Button>
              </Link>
            </div>

            <div className="d-flex justify-content-between">
            <button
              className="ml-3 btn btn-dark"
              onClick={clearCart}
            >
              Borrar todos los productos
            </button>
              <Link to="/order">
                <button className="ml-3 btn btn-dark">Comprar</button>
              </Link>
            </div>
          </Table>
        )}
      </div>
    </>
  );
};

export default Cart;