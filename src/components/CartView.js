import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons' 

import { CartContext } from '../Context/CartContext'

export default function CartView(props) {
    
    const { RemoveItem } = useContext(CartContext)

    return (

            <div className="cartDetail">    
                <div className="cant"><span>Cantidad: {props.item.quantity}</span></div>
                <h5>{props.item.title}</h5>
                <img src={props.item.photoUrl} className="cartImg" alt='Imagen del producto' />
                <div>
                    <span> ${props.item.price}</span>
                </div>
                <button onClick={()=> RemoveItem(props.item)}><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>
    )
}
