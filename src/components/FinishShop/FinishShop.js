import React from 'react';
import { NavLink } from 'react-router-dom';

import './FinishShop.css'


function FinishShop(props){
   
    return (
        <div className='terminarCompra'>
            <p className='terminarCompra_p'>Agregaste {props.props} Item al Carrito</p>
            <button className='btn_goCart'><NavLink to="/Cart" className='btn_linkCart'>Ir al Carrito</NavLink></button>
        </div>
    )
}

export default FinishShop;