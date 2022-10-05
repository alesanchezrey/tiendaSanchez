import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc, getFirestore, updateDoc, doc } from "firebase/firestore"
import moment from "moment"

const Cart = () => {
const { cart, addToCart, removeItem } = useContext(CartContext)
const db = getFirestore()

const createOrder = () => {
  const order = {
    buyer: {
      name: "Jose",
      phone: "314314",
      email: "jose@jose.com"
    },
    items: cart,
    total: cart.reduce((valorPasado, valorActual) => valorPasado + (valorActual.price * valorActual.quantity), 0 ),
    date: moment().format(),
  }
  const query = collection(db, "orders")
  addDoc(query, order)
  .then(({id}) => {
    console.log(id)
    alert("Felicidades por tu compra: " +id)
  })
  .catch(() => alert("No se pudo completar tu compra, intenta luego"))
}

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
    <div>
      <button onClick={createOrder}>Crear Orden</button>
    </div>
    </div>
  )
}

export default Cart