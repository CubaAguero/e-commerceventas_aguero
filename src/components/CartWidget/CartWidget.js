import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { CartContext } from '../../Context/CartContext';

import './CartWidget.css'

function CartWidget() {

    const { countTt } = useContext(CartContext);
    
    return (
      <div className="cartWidget">
        <FontAwesomeIcon icon={faShoppingCart} size='sm' />
       <span className='cartCount'>{countTt}</span>
      </div>
    );
}

export default CartWidget;