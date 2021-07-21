import React from 'react';

import ShoppingCart from '../assets/ShoppingCart.png'

function CartWidget() {
    return (
      <>
       <img src={ShoppingCart} alt="" className='shopcartlogo'/>
      </>
    );
}

export default CartWidget;