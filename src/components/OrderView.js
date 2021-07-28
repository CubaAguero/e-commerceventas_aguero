import React from 'react';

 function OrderView(props) {

    return (
        <ul className='f2'>
            <li>
                <span>{props.item.quantity}</span>
            </li>
            <li>
                <span>{props.item.title}</span>
            </li>
            <li>
                <span>${props.item.price}</span>
            </li>
            
        </ul>
    )
}

export default OrderView;