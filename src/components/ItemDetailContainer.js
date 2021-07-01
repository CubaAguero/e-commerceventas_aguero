import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';


const itemDetail = {
   
    product: {
        id: '1',
        title: 'Audio-technica ATH-M50x',
        description: 'Auricular de monitoreo circumaural negro',
        price: '$30.000',
        photoUrl: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    }
}

const getItem = ()=>{ 
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(itemDetail), 3000)
        })
    
}


function ItemDetailContainer() {
    const [item, setItem] = useState({})

    useEffect(() => {
        getItem().then ((itemDetailResolve)=>{
            setItem(itemDetailResolve)
        })
    }, [])
    
    return(
        <div className='itemDetailContainer'>
            <ItemDetail {...item} />
        </div>

    )

}

export default ItemDetailContainer;