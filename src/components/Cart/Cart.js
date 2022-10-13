import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc, getFirestore, updateDoc, doc } from "firebase/firestore"
import moment from "moment"

const Cart = () => {
const { cart, removeItem, clear } = useContext(CartContext)
const db = getFirestore()
const [total, setTotal] = useState("0")
const [update, setUpdate] = useState(false)
const [values, setValues] = useState ({
  name: "",
  phone: "",
  email: ""
})

const createOrder = () => {
  
  const order = {
    buyer: {
      name: `${values.name}`,
      phone: `${values.phone}`,
      email: `${values.email}`
    },
    items: cart,
    total: total,
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

useEffect(() => {
  setTotal((cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)))
}, [update])

const deleteOne = (id) => {
  removeItem(id)
  !update ? setUpdate(true) : setUpdate (false)
}

const deleteAll = () => {
  clear()
  !update ? setUpdate(true) : setUpdate(false)
}

const buy = (event) => {
  event.preventDefault()
  if (!values.name || !values.email || !values.phone) {
    alert("Completa todos los campos")
  }else {
    createOrder()
    deleteAll() 
  }    
}

const handleChange = (event) =>{
  const { target } = event
  const { name, value } = target
  const newValues = {
    ...values,
    [name]: value,
  };
  setValues(newValues)
}

  return (
    <div className="contCarrito">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <div>
          <h2>Sin productos agregados</h2>
          <Link to={"/"}>Ver productos para comprar</Link>
        </div>
      ) : (<div>
        {cart.map((item) => (
          <div key={item.id} className="itemView">
                <img src={item.image} alt={item.title} />
                <h3>Producto: {item.title}</h3>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.cantidad}</p>
                <p>Sub-Total: ${item.price * item.cantidad}</p>
                <button onClick={() => deleteOne(item.id)}>Eliminar</button>
          </div>
        ))}  
            <h2>Total Compra: ${total}</h2>
            <button onClick={deleteAll}>Vaciar Carrito</button>
            <form className="form" onSubmit={buy}>
            <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                type="name"
                value={values.name}
                onChange={handleChange}
              />
              <label htmlFor="email">Correo</label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
            />
              <label htmlFor="phone">Teléfono</label>
              <input
                id="phone"
                name="phone"
                type="number"
                value={values.phone}
                onChange={handleChange}
            />
            <br/>
              <button className="carrito-Boton" type="submit">Crear orden</button>
            </form>
        </div>  
      )}
    </div>
  )
}

export default Cart