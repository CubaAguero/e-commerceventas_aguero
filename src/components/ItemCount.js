import React, {useState} from 'react';

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
            <button onClick={upCount}>+</button>
            <span>{count}</span>
            <button onClick={dwCount}>-</button>
            <button className='bayButton' onClick={Add}>Agregar al Carrito</button>
            
        </div>
    )
}

export default ItemCount;