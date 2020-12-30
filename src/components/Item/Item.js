import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ thumbnail, price, id, title }) => {

  const style = {
    maxHeight: "300px",
    maxWidth: "500px",
    minHeight: "200px",
    minWidth: "200px"
  };


  return (
    <div className="d-inline-flex flex-wrap justify-content-center">
      <Card style={{ width: "18rem" }} className="m-4 p-2">
        <Card.Img variant="top" src={thumbnail} className="img-fluid shadow" style={style}/>
        <Card.Body className="text-dark">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`$ ${price}`}</Card.Text>
          <Link to={`/detalle/${id}`}>
            <Button variant="dark" className="btn-block btn btn-dark">
              Ver detalle
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
