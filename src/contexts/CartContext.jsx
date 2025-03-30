
import { Children, createContext, ReactNode, useState } from 'react'


export const CartContext = createContext()

 function CartProvider({ children }){

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState("")

    function addItemCart(newItem){
        const indexItem = cart.findIndex(item => item.id ===  newItem.id) 

        if(indexItem !== -1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount + 1
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price

            setCart(cartList)
            totalResultCart(cartList)
            return;
        }

        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data])
        totalResultCart(...cart, data)
    }

    function  removeItemCart(product){
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem]?.amount > 1){
            // Diminuir apenas um amount do que você tem

            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price

            setCart(cartList);
            totalResultCart(cartList)
            return;
        }
        
        const romoveItem = cart.filter(item => item.id !== product.id)
        setCart(romoveItem);
        totalResultCart(romoveItem);
    }

    
    function totalResultCart(items){
        let myCart = items;
        let result = myCart.reduce((acc, obj) => {return acc + obj.total},0)
        const resultFormated = result.toLocaleString("pt-BR",{style:"currency", currency:"BRL"})
        setTotal(resultFormated)
    }

    return(
        <CartContext.Provider value={{ 
            cart,
            cartAmount: cart.length,
            addItemCart,
            removeItemCart,
            total
         }}
        >
            {children}
        </CartContext.Provider>
    )

 }

 export default CartProvider;