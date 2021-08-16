import React, { useState, useContext } from 'react';

import ItemCount from '../ItemCount/ItemCount';
import FinishShop from '../FinishShop/FinishShop';

import './ItemDetail.css'

import { CartContext } from '../../Context/CartContext';

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
            <img 
                src={item.photoUrl} 
                className='itemDetail_img' 
                alt="" 
            />
            <div className='itemDetail_header'>
                <h4>{item.title}</h4>
                
                <div>
                    <span> ${item.price}</span> 
                </div>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                {!qAddCart ? (
                        <></>
                    ) : (
                        <FinishShop props={quantityToAdd} />
                    )
                }         
            </div>
            <div className='itemDetail_body'>
                 <p className='itemDetail_p'>{item.description}</p>
            </div>

        </div>
    )
}

export default ItemDetail;