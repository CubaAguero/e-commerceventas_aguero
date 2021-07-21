import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import {CartContext} from '../Context/CartContext';
import Item from './Item';

function FinishShop(props){

    const { RemoveItem, itemCart } = useContext(CartContext);
   
    return (
        <div className='terminarCompra'>
            <p>agregaste {props.quantityToAdd} productos al carrito</p>
            <button><NavLink to="/Cart">Terminar Compra</NavLink></button>
        </div>
    )
}

export default FinishShop;