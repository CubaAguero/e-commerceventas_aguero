import React from 'react';
import { Link } from 'react-router-dom'

function Item({item}){
    
    return (
        <div className="prodDetail">
            <h4>{item.title}</h4>
            <img src={item.photoUrl} className='imgProd' alt="" />
            <div>
                <span>${item.price}</span>
                <p>Description: {item.description}</p>
                <button><Link to={`/item/${item.id}`}>Ver detalle</Link></button>
            </div>
        </div>
    )
}

export default Item;