import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import useCartContext from '../../context/CartContext';


const styles = {
  color: 'black'
}

const CartIcon = () => {

    const { getCartIconQuantity } = useCartContext()


  return (
<div><p className="btn-dark">{getCartIconQuantity()}</p>
 <FontAwesomeIcon style={styles} className="h4 mr-2 my-auto" icon={faShoppingCart}/>
</div>
  );

}


export default CartIcon;