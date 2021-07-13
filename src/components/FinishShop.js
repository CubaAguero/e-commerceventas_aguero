import React from 'react';
import { NavLink } from 'react-router-dom';

function FinishShop(props){
    console.log('cantidad', props.quantityToAdd)
    return (
        <div className='terminarCompra'>
            <p>agregaste {props.quantityToAdd} productos al carrito</p>
            <button><NavLink to="/Cart">Terminar Compra</NavLink></button>
        </div>
    )
}

export default FinishShop;