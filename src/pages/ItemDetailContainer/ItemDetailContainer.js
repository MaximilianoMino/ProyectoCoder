import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getProductsById } from "../../firebase/dataBase";
import { useParams } from "react-router-dom";
import Error from '../../components/Error/Error'
import Spinner from "../../components/Spinner/Spinner";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getProductsById(id)
       
        .then((response) => {
       /*    let product = response.filter((prod) => {
            return prod.id === id;
          })[0]; */
          console.log(response)
          setProduct(response);
          setLoading(false);
        });
    }, 2000);
  }, [id]);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (product === undefined ?
        <Error />
        :<ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
