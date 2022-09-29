import data from "../mockData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams();
  const db = getFirestore()
  
  
const getProduct = () => {
  const queryDoc = doc(db, "items", id)

  getDoc(queryDoc)
  .then((res) => {
    setProduct(res.data())
  })
  .catch((err) => console.log(err))
}

useEffect(() => {
  getProduct()
}, [id])  

  return (
    <>
      <h1>{greeting}</h1>
      <ItemDetail item={product} />
    </>
  );
};

export default ItemDetailContainer;