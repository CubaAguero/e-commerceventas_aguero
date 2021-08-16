import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons' 

import { CartContext } from '../../Context/CartContext'

import './CartView.css'

export default function CartView(props) {
    
    const { RemoveItem } = useContext(CartContext)
    
    return (

            <div className="cartDetail">    
                <span className="cant">{props.item.quantity}</span>
                <img src={props.item.photoUrl} className='cartImg' alt='foto de producto' />
                <h3>{props.item.title}</h3>
                <span className='price'>${props.item.price}</span>
                <button onClick={()=> RemoveItem(props.item)} className='btn_remove'><FontAwesomeIcon icon={faTrashAlt} size='lg' /></button>
            </div>
    )
}
