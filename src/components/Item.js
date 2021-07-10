import React from 'react';
import { Link } from 'react-router-dom'

function Item({item}){
    return (
        <div className="prodDetail">
            <h4>{item.product.title}</h4>
            <img src={item.product.photoUrl} className='imgProd' alt="" />
            <div>
                <span>id: {item.product.id}&nbsp;&nbsp;</span>
                <span>{item.product.price}</span>
                <p>Description: {item.product.description}</p>
                <button><Link to={`/item/${item.product.id}`}>Ver detalle</Link></button>
            </div>
        </div>
    )
}

export default Item;