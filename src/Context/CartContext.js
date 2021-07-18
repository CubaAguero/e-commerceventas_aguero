import React, { createContext, useState } from "react";

export  const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [itemCart, setItemCart] = useState([]);

    const isInCart = (props) => {
        
        itemCart.find(product => product.id === props.id)
    }

    const addToCart = (item, quantity) => {
        
        if(isInCart(item)){
            itemCart.forEach((element)=>{
                if(element===item){
                    item.quantity += quantity;
                }
            })
            console.log('isincart')
        } else{
            item.quantity = quantity;
            setItemCart([...itemCart, item])
            console.log('Agregado al carrito')
        }
    }

    const clear = () => {
        setItemCart([]);
        console.log('El carrito ah sido vaciado')
    }

    const RemoveItem = (itemId) => {
        itemCart.filter(item => item.id !== itemId)
        console.log('quitado del carrito')
    }

   return(
        <CartContext.Provider value={{addToCart, RemoveItem, itemCart, clear}} >
            { children }
        </CartContext.Provider>
    )   
}   