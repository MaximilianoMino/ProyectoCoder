import React from "react";
import Card from "../card/Card";
import "./item.scss";
const Item = ({ thumbnail, price, id, title }) => {
  return (
    <>
      <div className="d-flex">
        <Card thumbnail={thumbnail} price={price} id={id} title={title} />
      </div>
    </>
  );
};

export default Item;
