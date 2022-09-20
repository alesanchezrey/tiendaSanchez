import ItemCount from "../ItemCount/ItemCount"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const handleOnAdd = (cantidad) => {
  alert(`Agregaste ${cantidad} productos al carrito`)
}
const ItemDetail = ({item}) => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log("Cantidad de productos en el carrito: " +count)
  }
    return (
      <div>
          <img width={"200px"} src={item.image} alt={item.title} />
          <h2>{item.title}</h2> 
          <h3>${item.price}</h3>
          <ItemCount count={count} setCount={setCount} initial={1} stock={item.stock} onAdd={handleOnAdd} />
          <div><Link to={"/cart"} onClick={handleClick}><button >Ir al Carrito</button></Link></div> 
      </div>
    )
  }
  
  export default ItemDetail