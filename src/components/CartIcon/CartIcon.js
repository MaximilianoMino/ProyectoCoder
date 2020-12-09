import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useCartContext from "../../context/CartContext";

const styles = {
  color: "black",
};

const CartIcon = () => {
  const { getCartIconQuantity } = useCartContext();

  return (
    <div>
    
      <FontAwesomeIcon
        style={styles}
        className="h4 mr-1 my-auto fixed"
        icon={faShoppingCart}
      /> 
      <span className="text-dark">{getCartIconQuantity()}</span>
    </div>
  );
};

export default CartIcon;
