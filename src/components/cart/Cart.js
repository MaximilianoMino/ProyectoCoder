import React from "react";
import useCartContext from "../../context/CartContext";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faShoppingBasket, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import './cart.scss'


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
    minHeight: "70px",
    minWidth: "200",
    maxHeight: "80px",
    maxWidth: "100px"
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
              <Link to="/" className="font-weight-bold">
                aqui
              </Link>{" "}
              para continuar haciendo compras
            </p>
          </div>
        ) : (
          <div>
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
                <tbody key={product.id}>
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
                        className="h4 pb-2 ml-4 my-auto icon"
                        icon={faTimesCircle}
                      />
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>

            <div className="text-center">
              <FontAwesomeIcon
                icon={faTrashAlt}
                className=" text-danger ml-3 icon"
                onClick={clearCart}
              />

              <p className="h5">Borrar todos los productos</p>
            </div>

            <div className="col-12 d-flex justify-content-between mt-5">
              <div className="mr-auto">
                {" "} <Link to="/">
                <Button className=" btn-dark">
                  Continuar{" "}
                  <FontAwesomeIcon icon={faShoppingBasket} className="ml-2" />
                </Button>
                </Link>
              </div>
              <div className="m-auto pr-5">
                <p className="pr-5 h3">Total ${getGrandTotal()} ARS</p>
              </div>
              <div>
                {" "}
                 <Link to="/order">
                <Button className=" btn-dark">
                  Comprar{" "}
                  <FontAwesomeIcon icon={faCreditCard} className="ml-2" />
                </Button>
                 </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
