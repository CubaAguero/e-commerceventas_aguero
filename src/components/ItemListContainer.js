import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';

const itemInfo = [
    {
        product: {
            id: '1',
            title: 'Audio-technica ATH-M50x',
            description: 'Auricular de monitoreo circumaural negro',
            price: '$30.000',
            photoUrl: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        }

    },
    {
        product: {
            id: '2',
            title: 'Microfono Rode Nt1a',
            description: 'Microfono condensador cardiode',
            price: '$50.000',
            photoUrl: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' 

        }

    },

]


function ItemListContainer(){

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState([false])

    useEffect(()=>{
        setLoading(true)
         new Promise((resolve, reject)=>{
             setTimeout(() => resolve(itemInfo), 3000)
         })
         .then((itemInfoResolve)=>{
             setProduct(itemInfoResolve)
             setLoading(false)
         }
         )
    },[])
    
    if(loading){
        return(<div>
            <h4>loading...</h4>
        </div>
        )
    }
    return(
        <div className='itemlistcontainer'>
           <ItemList product={product} />

        </div>
    );
}

export default ItemListContainer;