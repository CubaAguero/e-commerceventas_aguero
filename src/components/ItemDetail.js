import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail({product}) {
  
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
                    <ItemCount stock={5} initial={1} onAdd={(count)=> alert("Agregaste " + count + " productos!")} />
                </>

            )}   
        </div>
    )
}

export default ItemDetail;