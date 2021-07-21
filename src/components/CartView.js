import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons' 

import { CartContext } from '../Context/CartContext'

export default function CartView(props) {
    
    const { RemoveItem } = useContext(CartContext)

    return (
        <div className="cartDetail">
            <div className="cant"><span></span></div>
            <h5>{props.item.title}</h5>
            <img src={props.item.photoUrl} className="cartImg" />
            <div>
                <span>Id: {props.item.id}</span>&nbsp;&nbsp;
                <span>{props.item.price}</span>
            </div>
            <button onClick={()=> RemoveItem(props.item)}><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    )
}
