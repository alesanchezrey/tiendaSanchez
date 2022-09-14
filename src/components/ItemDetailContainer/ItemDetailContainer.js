import data from "../mockData";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const id = "2";

  useEffect(() => {
    setIsLoading(true);

    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    getProducts
      .then((response) => {
        setProduct(response.find((item) => item.id === id));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <h1>Cargando detalle del producto ...</h1>;
  }

  return (
    <>
      <h1>{greeting}</h1>
      <ItemDetail item={product} />
    </>
  );
};

export default ItemDetailContainer;