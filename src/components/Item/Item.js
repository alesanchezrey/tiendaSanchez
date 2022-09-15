const Item = ({title, price, image}) => {
  return (
    <div className="itemCont">
        <img width={"200px"} src={image} alt={title} />
        <h2>{title}</h2> 
        <h3>${price}</h3>
        <button>Ver más</button>
    </div>
  )
}

export default Item