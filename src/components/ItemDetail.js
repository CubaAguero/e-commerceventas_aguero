import React from 'react';

function ItemDetail({product}) {
  console.log('item', product)
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
                </>
            )}   
        </div>
    )
}

export default ItemDetail;