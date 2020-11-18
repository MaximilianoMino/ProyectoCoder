import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({thumbnail, price, id, title}) => {
 return (
    <div className="d-inline-flex flex-wrap justify-content-center"> 
 
    <Card style={{ width: '18rem' }} key={id} className="m-4">
  <Card.Img variant="top" src={thumbnail} className="img-fluid" />
  <Card.Body>
      <Card.Title>{title}</Card.Title>
    <Card.Text>
     {`$ ${price}`}
    </Card.Text>
    <Button variant="primary" className="btn-block">Agregar al carrito</Button>
  </Card.Body>
</Card>
    </div>
  );
}

export default Item
