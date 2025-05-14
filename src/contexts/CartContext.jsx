
import { Children, createContext, ReactNode, useState } from 'react'
import { toast } from 'react-hot-toast';


export const CartContext = createContext()

 function CartProvider({ children }){

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState("");
    

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

        // Adicionar o item na lista
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data])
        totalResultCart([...cart, data])
    }


    function removeItemCart(product){
        const indexItem = cart.findIndex(item => item.id === product.id)
       
        if(cart[indexItem]?.amount > 1 ){
            // Diminuir apenas 1 amount do que você tem
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price

            setCart(cartList)
            totalResultCart(cartList)
            return
        }

        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem)
        totalResultCart(removeItem)
        toast.success("Produto removido do carrinho")

    }

    function totalResultCart(items){
        let myCart = items;
        let result = myCart.reduce((acumulador, itemAtual) => {return acumulador + itemAtual.total}, 0);
        // const resultFormated = result.toLocaleString("pt-br",{style:"currency", currency: "BRL"})
        setTotal(result);
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