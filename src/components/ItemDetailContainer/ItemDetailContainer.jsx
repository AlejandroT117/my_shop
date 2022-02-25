import { useState, useEffect } from "react";
import { askForData } from "../../helpers/askForData";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {



  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

 // console.log(id);

  useEffect(() => {
    setLoading(true);
    /* 
    //PEdir datos de forma local
    askForData()
      .then((res) => {
        if (id) {
          const filtered = res.find((el) => el.id === Number(id));
          setItem(filtered);
        }
        //console.log(item);
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        setLoading(false);
      }); */

    //Pedir datos co firebase
    // 1.- Referencia al documento
    const docRef = doc(db, "productos", id)
    // 2.- Petinición 
    getDoc(docRef)
      .then((doc)=>{
        setItem(
          {id:doc.id, ...doc.data()}
          )
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        setLoading(false);
      });



  }, [id]);

  return (
    <div className="container my-5 ItemListContainer">
      {loading ? <h2>Loading...</h2> : <ItemDetail {...item} />}
    </div>
  );
};
