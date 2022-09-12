import data from "../mockData"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({greeting}) => {

  const [productList, setProductList] = useState([])

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response.find((item)=> item.id === "2"))
    })
  }, [])
  
  const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 2000)
    })
  

  return (
    <>
    <h1>{greeting}</h1>
    <ItemDetail item={productList}/>
    </>
  )
}

export default ItemDetailContainer