import { useState } from "react";
import { CartContext} from "./CartContext";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad) => {
        if (isInCart(item)) {
            alert("Ya se encuentra en el carrito")
        } else {
            setCart([...cart, {...item, cantidad}])
        }
      console.log('cart', [...cart, {...item, cantidad}])
    }
    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const removeItem = (productId) => {
        let newArray = []
        cart.forEach((product) => {
            if (product.id === productId){
                console.log(product)
            }else {
                newArray.push(product)
            }
        }

        )
        setCart(newArray)
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