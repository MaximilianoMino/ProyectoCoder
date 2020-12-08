import React,{ useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import '@fortawesome/fontawesome-svg-core';
import useCartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({ product }) => {


const {addProductToCart} = useCartContext();


const handleProductArray = () => {
  addProductToCart(product, add);
}

const [add, setAdd] = useState(1)

const onAdd = (value) =>{
      setAdd(value) 
    }
    

    return (<>


    <div>
      <h2 className="text-center bg-light mt-4">DETALLE DEL PRODUCTO</h2>
    </div>

    <div className="container mt-5 shadow">
      <div className="row">
      
        <div className="col-sm-6 col-12 d-flex flex-column justify-content-center">
<div className="d-flex justify-content-center">
  <Card style={{ width: '18rem' }}  className="m-4">
    <Card.Img variant="top" src={product.thumbnail} className="img-fluid" />
    
  </Card>
</div>
      <ItemCount initial={1} max={10} min={1} onAdd={onAdd} /> 

      <Link to='/cart'>
    <Button className="btn btn-block btn-dark my-3" onClick={handleProductArray}>Añadir {add} al carrito</Button>
     </Link>  
     </div>
      <div className="col-sm-6 col-12 mt-3">
        <Table responsive className="text-center">
        <thead>
          <tr>
            <th>
            {product.title}
          </th>
        </tr>
        </thead>
        <tbody>
          <tr>
        <th>$ {product.price}</th>          
        </tr>
        <th>Reputacion del vendedor</th>
          <tr className="my-1" >
         Transacciones: {product.seller.seller_reputation.transactions.total}
         <ul className="list-group my-1">
           <li className="my-1">Ventas completadas: {product.seller.seller_reputation.transactions.completed}</li>
            <li className="my-1" >Ventas canceladas: {product.seller.seller_reputation.transactions.canceled}</li>
            <li><a className="page-link bg-dark text-white my-1" href={product.seller.permalink}>Perfil del vendedor</a></li>
         </ul>
          </tr>
          <tr className="my-1"><i class="far fa-credit-card"></i>
            Paga en hasta {product.installments.quantity} cuotas de $ {product.installments.amount}
          </tr>
        </tbody> 
     <Button variant="dark mt-3">Ir al carrito</Button>
        </Table>
    
      
      </div>
      </div>
      </div>
    </>
    )
  }

  export default ItemDetail
