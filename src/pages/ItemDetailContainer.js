import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../Firebase';


// const itemDetail = [
//     {
//         product: {
//             id: '1',
//             title: 'Audio-technica ATH-M50x',
//             description: 'Auricular de monitoreo circumaural negro',
//             price: '$30',
//             photoUrl: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//             category: 'headphones',
//             stock: '5'
//         }

//     },
//     {
//         product: {
//             id: '2',
//             title: 'Microfono Rode Nt1a',
//             description: 'Microfono condensador cardiode',
//             price: '$50',
//             photoUrl: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ,
//             category: 'mic',
//             stock: '3'

//         }

//     },
//     {
//         product: {
//             id: '3',
//             title: 'Gigabyte n5s',
//             description: 'Monitor de Estudio Gigabyte n5s. parlantes de 5 pulgadas, respuesta de frecuencia 70hz-22khz ',
//             price: '$100',
//             photoUrl: 'https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ,
//             category: 'Monitores de Estudio',
//             stock: '4'

//         }

//     },
//     {
//         product: {
//             id: '4',
//             title: 'Presonus Eris E4.5',
//             description: 'Monitor de Estudio Presonus Eris E4.5. Parlantes de 4.5", repsuesta de frecuencia 70hz-20khz',
//             price: '$120',
//             photoUrl: 'https://images.pexels.com/photos/4295360/pexels-photo-4295360.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ,
//             category: 'Monitores de Estudio',
//             stock: '5'

//         }

//     },
//     {
//         product: {
//             id: '5',
//             title: 'Sennheiser Mk8',
//             description: 'Microfono condensador Sennheiser Mk8, de multipatron.',
//             price: '$70',
//             photoUrl: 'https://images.pexels.com/photos/3710191/pexels-photo-3710191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ,
//             category: 'mic',
//             stock: '2'

//         }

//     },
//     {
//         product: {
//             id: '6',
//             title: 'Shure Sm58',
//             description: 'Microfono dinamico Shure Sm58',
//             price: '$20',
//             photoUrl: 'https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' ,
//             category: 'mic',
//             stock: '6'

//         }

//     },
//     {
//         product: {
//             id: '7',
//             title: 'Marshall Major Iii Black',
//             description: 'Auricular Marshall Major Iii Black con microfono y control',
//             price: '$20',
//             photoUrl: 'https://images.pexels.com/photos/377711/pexels-photo-377711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,
//             category: 'headphones',
//             stock: '3'

//         }

//     },

// ]

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