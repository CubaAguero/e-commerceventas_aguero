import React, { useState, useContext } from 'react'

import OrderView  from '../../components/OrderView/OrderView'

import { CartContext } from '../../Context/CartContext'

import './Checkout.css'

import firebase  from 'firebase/app'
import 'firebase/firestore';
import { getFirestore } from '../../Firebase';

const inputs = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'Nombre'
    },
    {
        name: 'lastName',
        type: 'text',
        placeholder: 'Apellido'
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'Email: sucorreo@email.com'
    },
    {
        name: 'phone',
        type: 'text',
        placeholder: 'Tel: 1122334455'
    }

]

export default function Checkout() {
    
    const { itemCart } = useContext(CartContext);
    const [ formData, setFormData ] = useState({
        name: '',
        lastName: '',
        email: '',
    })
    const [ orderId, setOrderId ] = useState();
    
    const total = itemCart.reduce((acum, item) => acum + item.price, 0);

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    

    const handleClick = (event) => {
        event.preventDefault();
        const db = getFirestore();
        const order = db.collection("order")
        
        const newOrder = {
            buyer: formData,
            items: itemCart,
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        }

        order.add(newOrder).then(({id}) => {
            setOrderId(id)
            alert('Su Compra fue registrada exitosamente')
        }).catch(error => {
            console.log('error', error);
        })
        console.log('order', newOrder)
        
    }
    
    return (
        
        <div className='checkoutContainer'>
            <h2 className='checkout_title'>Checkout</h2>
            <div className='checkout'>

                <form className='form'>
                    <span className='form_title'>Ingrese sus Datos</span>
                    {inputs.map(({ name, type, placeholder })=> 
                        <input 
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            onChange={handleChange}
                            className='input'
                        />
                    )}
                    <button type='submit' onClick={handleClick} className='btn-submit'>Confirmar Compra</button>
                </form>
                <div className='orderView'>
                    <ul className='listOrder'>
                        <li>
                            <ul className='f1'>
                                <li><span>Cantidad</span></li>
                                <li><span>Articulo</span></li>
                                <li><span>Precio</span></li>
                            </ul>
                        </li>
                        <li>
                            {itemCart.map((item, key) => <OrderView item={item} key={key} />)}
                        </li>
                        <li className='total'>
                            <ul className='totalF'>
                                <li>
                                    Total
                                </li>
                                <li>
                                    ${total}
                                </li>
                            </ul>                           
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
