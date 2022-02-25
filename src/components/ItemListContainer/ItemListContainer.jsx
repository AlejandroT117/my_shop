import { useEffect, useState } from "react";
import { askForData } from "../../helpers/askForData";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where, Firestore } from "firebase/firestore";

const ItemListContainer = ({ nombre }) => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const {catId} = useParams();

  useEffect(() => {
    setLoading(true);

    /* console.log(catId) */

    /* askForData()
      .then((res) => {
        
        if (catId){
          const filtered = res.filter(el => el.category === catId)

          setProducts(filtered);
        }else{
          setProducts(res);

        }

      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        setLoading(false);
      }); */

    
    //Pedir datos desde firebase
    
    //1.- Referencia
    const productosRef = collection(db, 'productos')
    const q = catId ? query(productosRef, where("category", "==", catId)): productosRef
    //2.- Pedir esa referencia
    getDocs(q)
      .then((resp)=>{
        setProducts(
          resp.docs.map((doc)=> {
            return ({
              id:doc.id,
              ...doc.data()
            }
            )
          })
        )
      })
      .catch((resp) => {
        console.log(resp);
      })
      .finally(() => {
        setLoading(false);
      })


  }, [catId]);

  return (
    <div className="ItemListContainer">
      <h2>Bienvenido de nuevo, {nombre}</h2>

      {loading ? <h2>Loading...</h2> : 
      <ItemList productos={products} />}
    </div>
  );
};

export default ItemListContainer;
