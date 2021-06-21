import React from 'react';
import ItemCount from './ItemCount';


function ItemListContainer(props){
    return(
        <div className='itemlistcontainer'>
            <h2>{props.msj}</h2>
            <ItemCount stock={5} initial={1} onAdd={(count)=> alert("Agregaste " + count + " productos!")} />
        </div>
    );
}

export default ItemListContainer;