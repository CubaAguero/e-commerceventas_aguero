import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import ShoppingCart from '../assets/ShoppingCart.png'

import { CartContext } from '../Context/CartContext';

function CartWidget() {

    const { countTt } = useContext(CartContext);
    
    return (
      <div className="cartWidget">
        <FontAwesomeIcon icon={faShoppingCart} />
       {/* <img src={ShoppingCart} alt="" className='shopcartlogo'/> */}
       <span>{countTt}</span>
      </div>
    );
}

export default CartWidget;