import ItemCount from "../ItemCount/ItemCount"

const handleOnAdd = (cantidad) => {
  alert(`Agregaste ${cantidad} productos al carrito`)
}
const ItemDetail = ({item}) => {
    return (
      <div>
          <img width={"200px"} src={item.image} alt={item.title} />
          <h2>{item.title}</h2> 
          <h3>${item.price}</h3>
          <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />
      </div>
    )
  }
  
  export default ItemDetail