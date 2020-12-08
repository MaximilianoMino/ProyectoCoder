import React from 'react';
import useCartContext from '../../context/CartContext';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'




const Cart = () => {
  const {productArray, clearCart, deleteProduct, getGrandTotal} = useCartContext()
  
 const handleDel = () => {
   deleteProduct(productArray);
 }

  return (
    <div>

<h1 className="text-center">Carrito de compras</h1>

{ productArray.length === 0 ? (<div><p className="ml-4 mt-3">No tienes productos en el carrito de compras</p><p className="ml-4">Haga clic <a href="/" className="font-weight-bold">aqui</a> para continuar haciendo compras</p></div>):
  <Table responsive="sm">
   
    <thead>
      <tr>
        <th>#</th>
        <th>PRODUCTO</th>
        <th>PRECIO</th>
        <th>CANTIDAD</th>
       
         
         </tr>
    </thead>
    {productArray.map((e) =>( 
    <tbody key={e.id} >
      <tr>
        <td>
          <img alt="" title={e.title} src={e.thumbnail} className="img-fluid"/>
        </td>
        <td>{e.title}</td>
        <td>{e.price}</td>
        <td>{e.quantity}</td>
        <td><FontAwesomeIcon onClick={() => handleDel(e)} className="h4 pb-2 mx-2 my-auto" icon={faTimesCircle}/></td>
       
      </tr>
      <div className="d-flex justify-content-center">
       <h1 className="text-center">Total</h1>
       <hr></hr>
       <p className="text-center">${getGrandTotal()}</p>
      </div>
      </tbody>
    )
      )}

      
      <button className="ml-3 btn btn-dark d-flex justify-content-center" onClick={clearCart}>Borrar todos los prod</button>
    </Table>  }
      </div>
  )
}

export default Cart
