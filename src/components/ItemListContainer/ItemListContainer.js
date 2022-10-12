import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Itemlist from "../ItemList/Itemlist"
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
  const [productList, setProductList] = useState([])
  const {categoryName} = useParams()

  const getProducts = () => {
    const db = getFirestore()
    const querySnapshot = collection(db, "items")
    
    if(categoryName) {
      const queryFilter = query(querySnapshot, where("category", "==", categoryName))
      getDocs(queryFilter).then((response) => {
        const data = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data()}
        })
        setProductList(data)
      })
    }else {
      getDocs(querySnapshot).then((response) => {
        const data = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data()}
        })
        setProductList(data)
      })
    }
  }
  
  useEffect(() => {
    getProducts()
  }, [categoryName])

  return (
    <>
    <h1>{greeting}</h1>
    <h1>{categoryName}</h1>
    <Itemlist lista={productList}/>
    </>
  )
}

export default ItemListContainer