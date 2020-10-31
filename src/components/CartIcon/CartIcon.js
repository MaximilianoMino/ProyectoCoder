import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const styles = {
  color: '#00CED1'
}

const CartIcon = () => {

  return (

 <FontAwesomeIcon style={styles} className="h4 mr-2 my-auto" icon= {faShoppingCart}/>

  );

}


export default CartIcon;