const ItemDetail = ({item}) => {
    return (
      <div>
          <img width={"200px"} src={item.image} alt={item.title} />
          <h2>{item.title}</h2> 
          <h3>${item.price}</h3>
      </div>
    )
  }
  
  export default ItemDetail