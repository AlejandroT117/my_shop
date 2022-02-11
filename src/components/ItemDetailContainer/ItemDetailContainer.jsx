import { useState, useEffect } from "react";
import { askForData } from "../../helpers/askForData";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    setLoading(true);

    askForData()
      .then((res) => {
        if (id) {
          const filtered = res.find((el) => el.id === Number(id));
          setItem(filtered);
        }
        console.log(item);
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
