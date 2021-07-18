import React, { useContext } from 'react';

import { CartContext } from '../Context/CartContext';

function Cart(){

    const {itemCart, clear } = useContext(CartContext);
    console.log('itemCart', itemCart)

    return (
        <>
            <h2>Cart</h2>
            <button onClick={clear}>Vaciar Carrito</button>
        </>
    )
}

export default Cart;