import { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({item}) => {
  const { cart, addToCart } = useContext(CartContext)
  const [count, setCount] = useState(1)

  const onAdd = (item) => {
    addToCart(item, count)
  }
    
  
    return (
      <div>
          <img width={"200px"} src={item.image} alt={item.title} />
          <h2>{item.title}</h2> 
          <h3>${item.price}</h3>
          <ItemCount stock={item.stock} count={count} setCount={setCount} />
          <div><button onClick={() => onAdd(item)}>Agregar al carrito</button></div>
          {cart.length === 0 ? ('') : (
            <>
            <div className="bottomDetail">
              <div><Link to={"/"}><button>Seguir Comprando</button></Link></div>
              <div><Link to={"/cart"}><button>Ir al Carrito</button></Link></div>
            </div>
            </>
          )} 
      </div>
    )
  }
  
  export default ItemDetail