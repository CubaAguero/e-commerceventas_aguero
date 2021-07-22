import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartView from '../components/CartView';

import { CartContext } from '../Context/CartContext';

function Cart(){

    const {itemCart, clear, countTt } = useContext(CartContext);

    if(itemCart.length === 0){
        return(
            <div className="cart">
                 <h2>Cart</h2>
                <div>
                   <span>Cantidad de item en el Carrito</span>&nbsp;<span>{countTt}</span>
                </div>
                <span>
                    No hay ningun item en el carrito
                </span>
                <button><Link to="/Products">Ir a Comprar</Link></button>
            </div>
        )
    }

    return (
        <div className="cart">
            <>
                <h2>Cart</h2>
                <div>
                   <span>Cantidad de item en el Carrito</span>&nbsp;<span>{countTt}</span>
                </div>
                {itemCart.map((item, key) => <CartView item={item} key={key} />)}
                <button onClick={clear}>Vaciar Carrito</button>
                <button><Link to="/Products">Seguir Comprando</Link></button>
            </>    
        </div>
    )
}

export default Cart;