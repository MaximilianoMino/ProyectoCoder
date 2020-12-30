import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useCartContext from "../../context/CartContext";
import './cartIcon.scss'

const styles = {
  color: "black",
};

const CartIcon = () => {
  const { getCartIconQuantity } = useCartContext();

  return (
    <div>
    
      <FontAwesomeIcon
        style={styles}
        className="iconCart"
        icon={faShoppingCart}
      /> 
      <span className="textIcon">{getCartIconQuantity()}</span>
     
    </div>
  );
};

export default CartIcon;
