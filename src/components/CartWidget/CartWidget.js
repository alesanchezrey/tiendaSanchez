import carrito from '../../carrito.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
  const {totalItems} = useContext(CartContext)
  return (
    <>
      <img src={carrito} className="logoCarrito" alt="carrito compra"/>
      <span className="total">{totalItems () > 0 ? totalItems() : "0 "}</span>
    </>   
  )
}

export default CartWidget