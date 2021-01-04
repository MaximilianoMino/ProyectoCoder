import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useCartContext from "../../context/CartContext";
import { getFirestore } from "../../firebase/index";
import { useForm } from "react-hook-form";
import Cupon from '../Cupon/Cupon';


const UserForm = () => {
  const [title, setTitle] = useState();
  const [total, setTotal] = useState(Number);
  const [date, setDate] = useState();
  const [id, setId] = useState();
   const [price, setPrice] = useState(Number);
  const [orderName, setOrderName] = useState();
  const [orderLastName, setOrderLastName] = useState();
  const [orderEmail, setOrderEmail] = useState();
  const [repeatEmail, setRepeatEmail] = useState();
  const [order, setOrder] = useState([]);
  const [orderId, setOrderId] = useState();
  const [ready, setReady] = useState(false);
  
  

  const { productArray, getGrandTotal, clearCart } = useCartContext();

  const { register, errors, handleSubmit } = useForm();

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
  setOrder(order)

 
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
      buyer: { orderName , orderEmail, orderLastName },
      items: {id, title, price },
      date,
      total,
    });
    
    //Mientras escribe en la parte que tiene que repetir correo



  }, [orderEmail, total, orderName, title,  id , price, date]); 


  //Ejecutando cada vez que se escribe en el formulario

 const  handleChangeLastName = (e) => {
setOrderLastName ( e.target.value)
 }


const  handleChangeName = (e) => {
setOrderName ( e.target.value)
 } 
 const handleChangeRepeatEmail = (e) => {
  setRepeatEmail(e.target.value);
}

const handleChangeEmail = (e) => {
  setOrderEmail(e.target.value);
}

console.log(order)

   console.log(repeatEmail)
         console.log(orderEmail)
  const submitOrder = (data, e) => {
    e.preventDefault();

    if(orderEmail.trim() === repeatEmail.trim()) {   
 

      setReady(true)

    clearCart()  
    

     const db = getFirestore();
db.collection("Orders").add(order).then(({id}) => setOrderId (id)); 
}
  };

  return (
    <>

      {ready ? (
        <Cupon cupon={orderId} />
      ) : (
        <div className="container-fluid ">
          <h1 className="text-center py-5">Termina tu compra</h1>
          <div className="row">
            <div className="col-12 col-sm-6 my-3">
              <h2 className="text-center">Informacion del cliente</h2>

              <Form onSubmit={handleSubmit(submitOrder)}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Ingresa tu nombre.."
                    name="name"
                    onChange={handleChangeName}
                    ref={register({
                      required: {
                        value: true,
                        message: "Requerido",
                      },
                    })}
                  />
                  {errors.name && (
                    <Form.Text className="text-danger">
                      {errors.name.message}
                    </Form.Text>
                  )}{" "}
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Ingresa tu nombre.."
                    name="lastname"
                    onChange={handleChangeLastName}
                    ref={register({
                      required: {
                        value: true,
                        message: "Requerido",
                      },
                    })}
                  />
                  {errors.lastname && (
                    <Form.Text className="text-danger">
                      {errors.lastname.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu email.."
                    name="email"
                    onChange={handleChangeEmail}
                    ref={register({
                      required: {
                        value: true,
                        message: "Requerido",
                      },
                    })}
                  />
                  {errors.email && (
                    <Form.Text className="text-danger">
                      {errors.email.message}
                    </Form.Text>
                  )}{" "}
                </Form.Group>

                <Form.Group controlId="formBasicRepeatEmail">
                  <Form.Label>Confirma tu email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Confirma tu mail.."
                    name="repeatEmail"
                    onChange={handleChangeRepeatEmail}
                    ref={register({
                      required: {
                        value: true,
                        message: "Requerido",
                      },
                    })}
                  />
                  {errors.repeatEmail && (
                    <Form.Text className="text-danger">
                      {errors.repeatEmail.message}
                    </Form.Text>
                  )}
                </Form.Group>
     { orderEmail !== repeatEmail ?
        <p className="text-danger">Los correos deben coincidir</p> : null    
}
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
      )}
    </>
  );
};

export default UserForm;
