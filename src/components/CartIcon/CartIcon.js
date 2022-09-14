import React from "react";
import { BsCartFill } from "react-icons/bs";

import useCartContext from "../../context/CartContext";
import "./cartIcon.scss";

const styles = {
  color: "black",
};

const CartIcon = () => {
  const { getCartIconQuantity } = useCartContext();

  return (
    <div>
      <BsCartFill style={styles} className="iconCart" />
      <span className="textIcon">{getCartIconQuantity()}</span>
    </div>
  );
};

export default CartIcon;
