import React, { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial)
  
  const restar = () => (count > 0 ? setCount(count - 1) : null)
  const sumar = () =>
    count <= stock - 1
      ? setCount(count + 1)
      : alert("No hay más articulos disponibles")
  
    const handleOnAdd = () => {
    if (count <= stock) onAdd(count)
    }

  return (
    <>
      <div>Disponibles: {stock}</div>
      <div className="contOp">
        <button onClick={restar}>Restar</button>
        <div>{count}</div>
        <button onClick={sumar}>Sumar</button>
      </div>
      <div><button onClick={handleOnAdd}>Agregar al carrito</button></div>
    </>
  )
}

export default ItemCount