import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {
  const [hasAddedProductToCart, setHasAddedProductToCart] = useState(false)

  const handleOnAdd = (cantidad) => {
    setHasAddedProductToCart(true)
  }
    return (
      <div>
          <img width={"200px"} src={item.image} alt={item.title} />
          <h2>{item.title}</h2> 
          <h3>${item.price}</h3>
          <div>{hasAddedProductToCart ? <Link to={"/cart"} onClick={handleOnAdd}><button >Ir al Carrito</button></Link> : <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />}
          </div> 
      </div>
    )
  }
  
  export default ItemDetail