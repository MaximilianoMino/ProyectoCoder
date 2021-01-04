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
  } = useCartContext();

 
  const handleDel = (p) => {
    deleteProduct(p.id);
  };
const flyer = {
  backgroundImage:
    "url(https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
  width: "100%",
  height: "100vh",
  backgroundPosition: " bottom",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
};

  const style ={ 
    maxHeight: "100px",
    maxWidth: "80px"
  }

  return (
    <>
    <div style={flyer}></div>
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
                <tr style={style}>
                  <td>
                    <img
                      alt={e.title}
                      title={e.title}
                      src={e.thumbnail}
                      style={style}
                      className="img-fluid card-img"
                    />
                  </td>
                  <td>{e.title}</td>
                  <td>{e.price}</td>
                  <td>{e.quantity}  
                   <FontAwesomeIcon
                      onClick={() => handleDel(e)}
                      className="h4 pb-2 mx-2 my-auto"
                      icon={faTimesCircle}
                    /></td>
                 
                </tr>
              </tbody>
            ))}

            {/* Seccion total */}
            <div className="d-flex col-12 justify-content-between align-content-end">
              {/* Todavia no funciona  */}
             
              <h3>Total ${getGrandTotal()} ARS</h3>

              <Link to="/">
                <Button className="btn-dark mr-auto">
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
