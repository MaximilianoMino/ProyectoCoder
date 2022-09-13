import React from "react";
import Form from "react-bootstrap/Form";
import "./itemCount.scss";
const ItemCount = ({ count, increment, decrement }) => {
  return (
    <>
      <div className="d-inline-flex align-content-center justify-content-center form-group container">
        <Form>
          <div className="d-inline-flex justify-content-center">
            <h1
              onClick={increment}
              variant="white"
              className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
            >
              +
            </h1>
            <input
              readOnly
              value={count}
              className="quantity-field border-0 text-center w-25"
            />

            <h1
              onClick={decrement}
              variant="white"
              className="button-plus border rounded-circle icon-shape icon-sm"
            >
              -
            </h1>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ItemCount;
