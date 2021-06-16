import React from 'react';
import CartWidget from './CartWidget';


function NavBar(){
    return (
        <nav className = "navbar">
            <ul>
                <li>Home</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Nosotros</li>
            </ul>
            <CartWidget /> 
            
        </nav>
    );
}

export default NavBar;