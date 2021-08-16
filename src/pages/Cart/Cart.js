import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartView from '../../components/CartView/CartView';

import './Cart.css'

import { CartContext } from '../../Context/CartContext';

function Cart(){

    const {itemCart, clear, countTt } = useContext(CartContext);

    if(itemCart.length === 0){
        return(
            <div className="cart_Container">
                <div className='cart'>
                    <div className='cart_header'>
                        <h2>Cart</h2>
                        <span>Tenes {countTt} item en el Carrito</span>
                    </div>
                    <div className='cart_body'>
                        <p>
                            No hay ningun item en el carrito
                        </p>
                    </div>
                    <div className='cart_footer'>
                        <button className='btn_goShop'><Link to="/Products" className='btn_link'>Ir a Comprar</Link></button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="cart_Container">
            <div className='cart'>
                <div className='cart_header'>
                    <h2>Cart</h2>
                    <span>Tenes {countTt} item en el Carrito</span>
                </div>
                <div className='cart_body'>
                    <div className='item_cart'>
                        {itemCart.map((item, key) => <CartView item={item} key={key} />)}
                    </div>
                </div>

                <div className='cart_footer'>
                    <button onClick={clear}>Vaciar Carrito</button>
                    <button><Link to="/Products" className='btn_link'>Seguir Comprando</Link></button>
                    <button><Link to="/Checkout" className='btn_link'>Terminar Compra</Link></button>
                </div> 
            </div>
        </div>
    )
}

export default Cart;