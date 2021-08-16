import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css'
import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


function NavBar(){

    const [toggleMenu, setToggleMenu]= useState(false);

    const monitores = 'Monitores de Estudio';
    const headphones = 'headphones';
    const mic = 'mic';

    const handleToggle = ()=> setToggleMenu(!toggleMenu);
    
    
    return (
        <nav className = "navbar">
            <div className='leftSide'>  
                <button className='iconBars' onClick={handleToggle}><FontAwesomeIcon icon={faBars} /></button>
              
                <ul className={ toggleMenu ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item' >
                        <NavLink exact to="/" activeClassName='active' className='nav-link' onClick={handleToggle}>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/Products" activeClassName='active' className='nav-link' onClick={handleToggle}>Productos</NavLink>
                        <ul className='uldesplegable'>
                            <li className='nav-item'><NavLink to={`/Category/${monitores}`} className='nav-link-desp' onClick={handleToggle}>Monitores de Estudio</NavLink></li>
                            <li className='nav-item'><NavLink to={`/Category/${headphones}`} className='nav-link-desp' onClick={handleToggle}>Headphones</NavLink></li>
                            <li className='nav-item'><NavLink to={`/Category/${mic}`} className='nav-link-desp' onClick={handleToggle}>Microfonos</NavLink></li>
                        </ul>
                    </li> 
                    <li className='nav-item'>
                        <NavLink to='/Contact' activeClassName='active' className='nav-link' onClick={handleToggle}>Contacto</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='About' activeClassName='active' className='nav-link' onClick={handleToggle}>Nosotros</NavLink>
                    </li>
                </ul>
            </div>
            <div className='midSide'>
               <NavLink exact to='/'><Logo /></NavLink> 
            </div>
           
           <div className='rightSide'>   
            <NavLink to="/Cart" className='Cart-logo'><CartWidget /></NavLink>
           </div>
        </nav>
    );
}

export default NavBar;