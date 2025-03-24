
import { Children, createContext, ReactNode, useState } from 'react'


export const CartContext = createContext()

 function CartProvider({ children }){

    const [cart, setCart] = useState>([])

    
    return(
        <CartContext.Provider value={{ 
            cart,
            cartAmount: cart.length
         }}
        >
            {children}
        </CartContext.Provider>
    )

 }

 export default CartProvider;