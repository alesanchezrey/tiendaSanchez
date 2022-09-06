import React, {useState} from 'react'

const ItemCount = (props) => {
    const [item, setItem] = useState(0)

    const sumar = () => item <= props.stock -1 ? setItem(item + 1) : alert ("No hay más articulos disponibles")
    const restar = () => item > 0 ? setItem(item - 1) : null
  return (
    <>
    <h3>Articulo</h3>
    <div>Stock: {props.stock}</div>
    <div className='contOp'>
    <button onClick={restar}>Restar</button>
    <div>{item}</div>
    <button onClick={sumar}>Sumar</button>
    </div>
    </>
  )
}

export default ItemCount