import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import ProductsService from "../../services/firebase/productsService";
import { useParams } from "react-router-dom";
import Error from "../../components/Error/Error";
import Spinner from "../../components/Spinner/Spinner";

const productsService = new ProductsService();

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      productsService.getProductsById(id).then((response) => {
        setProduct(response);
        setLoading(false);
      });
    }, 2000);
  }, [id]);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : product === undefined ? (
        <Error />
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
