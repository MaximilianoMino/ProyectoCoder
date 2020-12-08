import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link} from 'react-router-dom';


const Item = ({thumbnail, price, id, title}) => {
 return (
    <div className="d-inline-flex flex-wrap justify-content-center"> 
 
    <Card style={{ width: '18rem' }} className="m-4">
  <Card.Img variant="top" src={thumbnail} className="img-fluid" />
  <Card.Body>
      <Card.Title>{title}</Card.Title>
    <Card.Text>
     {`$ ${price}`}
    </Card.Text>
    <Link to={`/detalle/${id}`}>
    <Button variant="primary" className="btn-block">Ver detalle</Button>
    </Link>
  </Card.Body>
</Card>
    </div>
 );
}

export default Item
