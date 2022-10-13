const ItemCount = ({stock, onAdd, count, setCount}) => {
  
  
  const restar = () => (count > 0 ? setCount(count - 1) : null)
  const sumar = () =>
    count <= stock - 1
      ? setCount(count + 1)
      : alert("No hay más articulos disponibles")

  return (
    <>
      <div className="contOp">
        <button onClick={restar}>Restar</button>
        <div>{count}</div>
        <button onClick={sumar}>Sumar</button>
      </div>
    </>
  )
}

export default ItemCount