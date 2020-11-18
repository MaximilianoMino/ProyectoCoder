import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import '@fortawesome/fontawesome-svg-core'
  const ItemDetail = ({  price, id, thumbnail, title ,transactions, canceled, completed,seller, cuotas, precioCuotas}) => {
    const  onAdd = (value) =>{
      console.log(value)
    }
    

    return (<>


    <div>
      <h2 className="text-center bg-light mt-4">DETALLE DEL PRODUCTO</h2>
    </div>

    <div className="container mt-5 shadow">
      <div className="row d-flex justify-self-center">
      
        <div className="col-sm-6 col-12">

  <Card style={{ width: '18rem' }} key={id} className="m-4">
    <Card.Img variant="top" src={thumbnail} className="img-fluid" />
    
  </Card>

      <ItemCount initial={0} max={10} min={0} onAdd={onAdd} />  
      </div>
      <div className="col-sm-6 col-12 mt-3">
        <Table responsive className="text-center">
        <thead>
          <tr>
            <th>
            {title}
          </th>
        </tr>
        </thead>
        <tbody>
          <tr>
        <th>$ {price}</th>          
        </tr>
        <th>Reputacion del vendedor</th>
          <tr className="my-1" >
         Transacciones: {transactions}
         <ul className="list-group my-1">
           <li className="my-1">Ventas completadas: {completed}</li>
            <li className="my-1" >Ventas canceladas: {canceled}</li>
            <li><a className="page-link bg-dark text-white my-1" href={seller}>Perfil del vendedor</a></li>
         </ul>
          </tr>
          <tr className="my-1"><i class="far fa-credit-card"></i>
            Paga en hasta {cuotas} cuotas de $ {precioCuotas}
          </tr>
        </tbody> 
     <Button variant="dark mt-3">Comprar ahora</Button>
        </Table>
    
      </div>
      </div>
      </div>
    </>
    )
  }

  export default ItemDetail
