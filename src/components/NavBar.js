import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';


function NavBar(){

    const monitores = 'Monitores de Estudio';
    const headphones = 'Headphones';
    const mic = 'Microfonos';

    return (
        <nav className = "navbar">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/Products">Productos</NavLink>
                    <ul>
                        <li><NavLink to={`{/Category/${monitores}}`}>Monitores de Estudio</NavLink></li>
                        <li><NavLink to={`{/Category/${headphones}}`}>Headphones</NavLink></li>
                        <li><NavLink to={`{/Category/${mic}}`}>Microfonos</NavLink></li>
                    </ul>
                </li> 
                <li><NavLink to='/Contact'>Contacto</NavLink></li>
                <li><NavLink to='About'>Nosotros</NavLink></li>
            </ul>
            <NavLink to="/Cart"><CartWidget /></NavLink>
            
        </nav>
    );
}

export default NavBar;