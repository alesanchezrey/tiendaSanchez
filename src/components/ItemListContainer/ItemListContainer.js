import data from "../mockData"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Itemlist from "../ItemList/Itemlist"

const ItemListContainer = ({greeting}) => {
  const [productList, setProductList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {category} = useParams()

  useEffect(() => {
    setIsLoading(true)

    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })

    getProducts
      .then((response) => {
        category ? setProductList(response.filter((item) => item.category === category)) : setProductList(response)
      })
      .finally(() => {
        setIsLoading(false)
      });
  }, [category])

  if (isLoading) {
    return <h1>Cargando...</h1>
  }
  

  return (
    <>
    <h1>{greeting}</h1>
    <h1>{category}</h1>
    <Itemlist lista={productList}/>
    </>
  )
}

export default ItemListContainer