import React from 'react';
import { Link } from 'react-router-dom'

import './Item.css'

function Item({item}){
    
    return (
        <div className="card">
            <img 
                src={item.photoUrl} 
                className='card_img' 
                alt="Imagen de producto" 
            />
            <div className='card_body'>
                <h3>{item.title}</h3>
                <span className='card_price'>${item.price}</span>
                <button className='btn_detail'>
                    <Link to={`/item/${item.id}`} className='btn_link'>Ver detalle</Link>
                </button>
            </div>
        </div>
    )
}

export default Item;