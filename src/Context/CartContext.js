import React, { createContext, useState } from "react";

export  const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [itemCart, setItemCart] = useState([]);
    const [countTt, setCountTt] = useState(0);

    const isInCart = (props) => {
        
      return itemCart.find(product => product.id === props.id)
    }

    const addToCart = (item, quantity) => {
        
        if(isInCart(item)){
            itemCart.forEach((element)=>{
                if(element===item){
                    item.quantity += quantity;
                    setCountTt(countTt + quantity);                
                }
            })
            
        } else{
            item.quantity = quantity;
            setItemCart([...itemCart, item]);
            setCountTt(countTt + quantity);
        }
    }
    
    const clear = () => {
        setItemCart([]);
        setCountTt(0);
        console.log('El carrito ah sido vaciado')
    }

    const RemoveItem = (props) => {
        const newCart = itemCart.filter(item => item.id !== props.id)
        setItemCart(newCart)
        setCountTt(countTt - props.quantity);
        console.log('quitado del carrito')
    }

    

   return(
        <CartContext.Provider value={{addToCart, RemoveItem, itemCart, clear, countTt}} >
            { children }
        </CartContext.Provider>
    )   
}   