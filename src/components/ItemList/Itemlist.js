import Item from "../Item/Item"
import { Link } from "react-router-dom"

const Itemlist = ({lista}) => {
  return (
    <div className="listContainer">
        {
            lista.map((product) => (
                <Link key={product.id} to={"/item/" + product.id}>
                <Item 
                    title={product.title} 
                    price={product.price} 
                    image={product.image}
                    category={product.category} 
                     />
                </Link>    
            ))
        }
    </div>
  )
}

export default Itemlist