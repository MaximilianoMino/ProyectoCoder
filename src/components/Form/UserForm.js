import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useCartContext from "../../context/CartContext";
import { getFirestore } from "../../firebase/index";


const UserForm = () => {
  const [title, setTitle] = useState();
  const [total, setTotal] = useState(Number);
  const [date, setDate] = useState();

  const [id, setId] = useState();
  const [price, setPrice] = useState(Number);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [error, setError] = useState(false);
  const [order, setOrder] = useState([]);


  const { productArray, getGrandTotal } = useCartContext();

  

 


  //Seteando los valores del objeto buyer

  useEffect(() => {

  
    setPrice(
      productArray.map((p) => {
        return p.price;
      })
    );

    setId(
      productArray.map((p) => {
        return p.id;
      })
    );

    setTotal(getGrandTotal);

    setDate(new Date());

    setTitle(
      productArray.map((p) => {
        return p.title;
      })
    );
  }, [getGrandTotal, productArray]);

  useEffect(() => {
    setOrder({
      buyer: { name, email },
      items: { id, title, price },
      date,
      total,
    });
  }, [email, total, name, title, id, price, date]);

  //Ejecutando cada vez que se escribe en el formulario


  const handleInputChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };

  const submitOrder = (e) => {
    e.preventDefault();
    console.log(order);

    setOrder(order)

const db = getFirestore();
db.collection("Orders").add(order);

  };


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
          <div className="col-12 col-sm-6 my-3">
            <h2 className="text-center">Informacion del cliente</h2>

            <Form onSubmit={submitOrder}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Ingresa tu nombre.."
                  name="name"
                  onChange={handleInputChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu email"
                  name="email"
                  onChange={handleInputChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Button variant="dark btn-block" type="submit">
                Comprar
              </Button>
            </Form>
          </div>
          <div className="col-12 col-sm-6 my-3">
            <h2 className="text-center">Resumen de compra</h2>
            <p className="text-center">{title}</p>
            <p className="text-center">Total: $ {total}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
