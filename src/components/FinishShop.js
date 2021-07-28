import React from 'react';
import { NavLink } from 'react-router-dom';


function FinishShop(props){
   
    return (
        <div className='terminarCompra'>
            <p>agregaste {props.props} productos al carrito</p>
            <button><NavLink to="/Cart">Ir al Carrito</NavLink></button>
        </div>
    )
}

export default FinishShop;