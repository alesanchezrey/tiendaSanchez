import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
const { cart, addToCart, removeItem } = useContext(CartContext)
  return (
    <div className="contCarrito">
    <h1>Carrito de Compras</h1>
    {cart.length === 0 ? (
        <>
        <h2>Sin productos agregados</h2>
        <Link to={"/"}>Ver productos para comprar</Link>
        </>
    ) : (
        <>
        {cart.map((item) => (
            <div key={item.id} className="itemView">
                <img src={item.image} alt={item.title} />
                <h3>Producto: {item.title}</h3>
                <p>Precio: ${item.price}</p>
                <p>Canntidad: {item.cantidad}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>    
    ))}
        </>
    )
    }
    </div>
  )
}

export default Cart