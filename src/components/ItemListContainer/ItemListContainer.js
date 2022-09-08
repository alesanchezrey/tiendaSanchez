import data from "../mockData"
import { useEffect, useState } from "react"
import Itemlist from "../ItemList/Itemlist"

const ItemListContainer = ({greeting}) => {

  const [productList, setProductList] = useState([])

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response)
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
    <Itemlist lista={productList}/>
    </>
  )
}

export default ItemListContainer