import React from 'react';
import Item from '../Item/Item';

import './ItemList.css'


function ItemList({product}){
    
    return(
        <div className="itemList">
            {product.map((item, key) => <Item item={item} key={key} />)}

        </div>
    )
  
}

export default ItemList;