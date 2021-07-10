import React from 'react';
import Logo from '../assets/img/Logo.jpg'

function Home() {
    return(
        <div>
            <h1>Todo para tu sonido</h1>
            <img src={Logo} className='img-logo'/>
        </div>
    )
}

export default Home;