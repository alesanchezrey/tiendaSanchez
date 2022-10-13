import { CartContext} from "./CartContext";
import { useState } from "react";


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad, stock) => {
        const exist = cart.find ((elemento) => elemento.id === item.id)
        if (exist) {
            if (exist.stock < cantidad){
                alert("Actualmente nos quedan" +(exist.stock) +"productos en stock, porque" +(exist.cantidad) +"estan en tu carrito")
            }else {
                exist.cantidad = exist.cantidad + cantidad
                exist.stock = exist.stock - cantidad
                setCart([...cart])
            }
        }else{
            setCart([...cart, {...item, cantidad, stock}])
        }
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