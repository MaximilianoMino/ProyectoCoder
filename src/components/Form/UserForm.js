import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useCartContext from "../../context/CartContext";

const UserForm = () => {
  const { productArray, getGrandTotal } = useCartContext();

  const [order, setOrder] = useState({
    buyer: { name: "", email: "" },
    items: "",
    total: getGrandTotal(),
  });
  const [error, setError] = useState(false);
console.log(order)
  //Ejecutando cada vez que se escribe en el formulario
  const actualizateOrder = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  //Extrayendo valores

  const { buyer } = order;
      console.log("asdasd " + buyer.name)
      console.log("231231 " + buyer.email)

  const submitOrder = (e) => {
    e.preventDefault();

    if (buyer.name.trim() === '' || buyer.email.trim() === '') {
      setError(true);
    }
    setError(false);
  };
  
  useEffect(() => {
    setOrder({
    buyer : { name: "", email: ""}
  });
    
  }, [])
  

  return (
    <>
      <h1 className="text-center jumbotron mb-5">Termina tu compra</h1>
      {error ? (
        <p className="alert-danger text-center h4">
          Todos los campos son necesarios
        </p>
      ) : null}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-4 my-3">
            <h2 className="text-center">Informacion del cliente</h2>
            
            <form
  onSubmit={submitOrder}
  >
    <label>Nombre</label>
    <input 
    type="text"
    className="u-full-width"
    placeholder="Inserte su nombre"
    onChange={actualizateOrder}
    value={order.buyer.name}
    />

        <label>Email</label>
    <input 
    type="email"
    className="u-full-width"
    placeholder="Inserte su mail.."
    onChange={actualizateOrder}
     value={order.buyer.email}

    />  
    <Button variant="dark btn-block" type="submit" >
              Comprar
            </Button>
    </form>
            {/* <Form>
            

              <Form.Group controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="name" placeholder="Ingresa tu nombre.." 
               />
                <Form.Text className="text-muted" onChange={buyer.name}
              > {actualizateOrder}
        
                </Form.Text>
              </Form.Group>
  
              
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email"  
                />
                <Form.Text className="text-muted"
                onChange={buyer.email}>
                {actualizateOrder}
                </Form.Text>
              </Form.Group>
             {/*  <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
 */}
              
            {/* </Form>  */}
          </div>
          <div className="col-12 col-sm-4 my-3">
            <Form>
              <h2 className="text-center">Medios de pago</h2>
              <Form.Check
                className="d-flex justify-content-center"
                type="switch"
                id="custom-switch"
                label="Mercado pago"
              />
              <Form.Check
                className="d-flex justify-content-center"
                type="switch"
                label="Pago mis cuentas"
                id="disabled-custom-switch"
              />
              <Form.Check
                className="d-flex justify-content-center"
                type="switch"
                label="Efectivo"
                id="enabled-custom-switch"
              />
            </Form>
          </div>
          <div className="col-12 col-sm-4 my-3">
            <h2 className="text-center">Resumen de compra</h2>
            {productArray.map((product) => {
              return <p key={product.id}>{product.title}</p>;
            })}
            <p>Total: $ {getGrandTotal()}</p>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
