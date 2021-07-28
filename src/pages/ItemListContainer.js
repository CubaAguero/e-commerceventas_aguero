import React, {useState, useEffect} from 'react';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../Firebase';



function ItemListContainer(){

    const [product, setProduct] = useState([{}]);
    const [loading, setLoading] = useState([false])
    const {categoryID} = useParams();

    useEffect(()=> {

         setLoading(true)
        const db = getFirestore();
        const itemCollection = db.collection("items")
        
        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log('no results');
            }else {
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                
                if (categoryID){
                    const filterCategory = data.filter(
                        (item) => item.category === categoryID
                      )

                    setProduct(filterCategory)

                }else{
                    setProduct(data)                
                }
            }
        }).catch(error => {
            console.log('error', error)
        }).finally(() => {
            setLoading(false)
        })

    },[categoryID])
    
    

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