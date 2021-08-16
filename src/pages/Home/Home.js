import React from 'react';
import Logo from '../../assets/img/Logo.jpg'

import './Home.css'

function Home() {
    return(
        <div className='Home_container'>
            <div className='Home'>
                <h2>Todo para tu sonido</h2>
                <img src={Logo} className='img-logo' alt='logo de portada'/>
            </div>
        </div>
    )
}

export default Home;