import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import {CartContext} from '../Context/CartContext';

function FinishShop(props){

    const { RemoveItem } = useContext(CartContext);

    const supItem = (e) => {
        RemoveItem(props.product)
    }
    
    return (
        <div className='terminarCompra'>
            <p>agregaste {props.quantityToAdd} productos al carrito</p>
            <button onClick={supItem}>Eliminar del Carrito</button>
            <button><NavLink to="/Cart">Terminar Compra</NavLink></button>
        </div>
    )
}

export default FinishShop;