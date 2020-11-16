import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({product}) => {
 return (
    <div className="d-flex flex-wrap justify-content-center"> 
 
      {product.map(item => (
    <Card style={{ width: '18rem' }} key={item.id} className="m-4">
  <Card.Img variant="top" src={item.thumbnail} className="img-fluid" />
  <Card.Body>
      <Card.Title>{item.title}</Card.Title>
    <Card.Text>
     {`$ ${item.price}`}
    </Card.Text>
    <Button variant="primary" className="btn-block">Agregar al carrito</Button>
  </Card.Body>
</Card>)
)}
    </div>
  );
}

export default Item
