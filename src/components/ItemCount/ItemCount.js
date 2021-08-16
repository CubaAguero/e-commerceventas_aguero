import React, {useState} from 'react';

import './ItemCount.css'

function ItemCount({ stock, initial, onAdd }){


    const [count, setCount] = useState(initial)

    const upCount = (e)=>{
        if( stock > 1 && count < stock ) {
            setCount(count + 1);
        }
        else {
            e.preventDefault()
        }
    };

    const dwCount = (e) =>{
        if ( stock > 1 && count > 0 ){
            setCount(count - 1);
        }
        else{
            e.preventDefault()
        }
    }

    const Add = (e)=>{
        if( stock > 0){
            onAdd(count)
        }
        else{
            e.preventDefault()
        }
    }

    return(
        <div className= 'itemcount'>
            <div className='itemCount_count'>
                <button onClick={upCount} className='btn_upDw'>+</button>
                <span className='count'>{count}</span>
                <button onClick={dwCount} className='btn_upDw'>-</button>
            </div>
            <button className='btn_addCart' onClick={Add}>Agregar al Carrito</button>  
        </div>
    )
}

export default ItemCount;