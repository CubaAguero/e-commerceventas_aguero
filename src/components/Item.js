import React from 'react';

function Item({item}){
    return (
        <div className="prodDetail">
            <h4>{item.product.title}</h4>
            <img src={item.product.photoUrl} className='imgProd' alt="" />
            <div>
                <span>id: {item.product.id}&nbsp;&nbsp;</span>
                <span>{item.product.price}</span>
                <p>Descripcion: {item.product.description}</p>
            </div>
        </div>
    )
}

export default Item;