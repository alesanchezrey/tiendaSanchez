import { CartContext} from "./CartContext";
import { useState } from "react";


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad) => {
        const itemAdded = isInCart(item.id)
        if (itemAdded) {
            itemAdded.cantidad = itemAdded.cantidad += cantidad
            setCart([...cart])
        } else {
            setCart([...cart, {...item, cantidad}])
        }
      console.log('cart', [...cart, {...item, cantidad}])
    }
    
    const isInCart = (id) => {
        return cart.find((item) => item.id === id)
    }

    const removeItem = (prodId) => {
        setCart(cart.filter((prod) => prod.id !== prodId))
    }

    const clear = () =>{
        setCart([]);
      }

    const totalItems = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, totalItems, clear }}>
            {children}
        </CartContext.Provider>
    )

}