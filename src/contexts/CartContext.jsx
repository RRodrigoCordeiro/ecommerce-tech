
import { Children, createContext, ReactNode, useState } from 'react'


export const CartContext = createContext()

 function CartProvider({ children }){

    const [cart, setCart] = useState([])

    function addItemCart(newItem){
        const indexItem = cart.findIndex(item => item.id ===  newItem.id) 

        if(indexItem !== -1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount + 1
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price

            setCart(cartList)
            return;
        }

        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data])
    }

    
    return(
        <CartContext.Provider value={{ 
            cart,
            cartAmount: cart.length,
            addItemCart
         }}
        >
            {children}
        </CartContext.Provider>
    )

 }

 export default CartProvider;