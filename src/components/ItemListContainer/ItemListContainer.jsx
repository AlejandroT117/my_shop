import { useEffect, useState } from "react";
import { askForData } from "../../helpers/askForData";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = ({ nombre }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    askForData()
      .then((res) => {
        console.log(res);
        setProducts(res);
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2>Bienvenido de nuevo, {nombre}</h2>

      {loading ? <h2>Loading...</h2> : 
      <ItemList productos={products} />}
    </>
  );
};

export default ItemListContainer;
