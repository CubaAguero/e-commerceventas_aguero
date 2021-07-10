import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';


const itemDetail = [
    {
        id: '1',
        title: 'Audio-technica ATH-M50x',
        description: 'Auricular de monitoreo circumaural negro',
        price: '$30.000',
        photoUrl: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        category: 'headphone'
    },
    {
        id: '2',
        title: 'Microfono Rode Nt1a',
        description: 'Microfono condensador cardiode',
        price: '$50.000',
        photoUrl: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ,
        category: 'mic'
    },

]
const getItem = ()=>{ 
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(itemDetail), 3000)
        })
    
}


function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const {id} = useParams();

    useEffect(() => {
        getItem().then ((itemDetailResolve)=>{
            const itemId = itemDetailResolve.filter(element => element.id === id)
            setItem(itemId)
        })
    }, [id])
    console.log('id', id)
    return(
        <div className='itemDetailContainer'>
            <ItemDetail {...item} />
        </div>

    )

}

export default ItemDetailContainer;