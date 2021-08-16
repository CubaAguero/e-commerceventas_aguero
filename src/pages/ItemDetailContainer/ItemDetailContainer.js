import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../Firebase';

import ItemDetail from '../../components/ItemDetail/ItemDetail';

import './ItemDetailContainer.css'

function ItemDetailContainer() {
    const [item, setItem] = useState([{}])
    const {id} = useParams();
    
    useEffect(() => {
    
        const db = getFirestore();
        const itemId = db.collection("items").doc(id)
        
        itemId.get().then((doc) => {
            if (doc.exist){
                console.log('item does not exits');
                return;
            }else{
                setItem({id: doc.id, ...doc.data()})
            }
        })

    }, [id])
    
    return(
        <div className='itemDetailContainer'>
            <ItemDetail item={item} />
        </div>

    )

}

export default ItemDetailContainer;