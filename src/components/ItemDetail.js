import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import FinishShop from './FinishShop';

import { CartContext } from '../Context/CartContext';

function ItemDetail({item}) {
    const [quantityToAdd, setQuantityToAdd] = useState();
    const [qAddCart, setQAddCart] = useState(false);
    const { addToCart } = useContext(CartContext);
    
    const onAdd = (e)=>{
        setQuantityToAdd(e)
        setQAddCart(true)
        addToCart(item, e)
    }
    
    if(!item){
        return (
            <div className="itemDetail">
                ...Loading
            </div>
          )  
    }

    return(
        <div className="itemDetail">
          
            <h4>{item.title}</h4>
            <img src={item.photoUrl} className='imgProd' alt="" />
            <div>
                <span> ${item.price}</span>
                <p>Descripcion: {item.description}</p>
            </div>
            {!qAddCart ? (
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                ) : (
                    <FinishShop props={quantityToAdd} />
                )
            }         

        </div>
    )
}

export default ItemDetail;