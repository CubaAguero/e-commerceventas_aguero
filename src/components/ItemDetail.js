import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import FinishShop from './FinishShop';

import { CartContext } from '../Context/CartContext';

function ItemDetail({product}) {
    const [quantityToAdd, setQuantityToAdd] = useState();
    const [qAddCart, setQAddCart] = useState(false);
    const { addToCart } = useContext(CartContext);

    const onAdd = (e)=>{
        setQuantityToAdd(e)
        setQAddCart(true)
        addToCart(product, quantityToAdd)
    }
    
    return(
        <div className="itemDetail">
            {!product ? (
                <span>
                    ...Cargando
                </span>
            ) : (
                <>
                    <h4>{product.title}</h4>
                    <img src={product.photoUrl} className='imgProd' alt="" />
                    <div>
                        <span>id: {product.id}&nbsp;&nbsp;</span>
                        <span>{product.price}</span>
                        <p>Descripcion: {product.description}</p>
                    </div>
                   {!qAddCart ? (
                       <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                    ) : (
                        <FinishShop props={quantityToAdd, product} />
                    )
                    } 
                </>

            )}   
        </div>
    )
}

export default ItemDetail;