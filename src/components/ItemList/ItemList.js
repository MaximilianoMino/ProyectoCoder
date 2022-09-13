import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import ProductsService from "../../services/firebase/productsService";
import Spinner from "../Spinner/Spinner";

const productsService = new ProductsService();

const ItemList = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      productsService.getProductsFromCat().then((response) => {
        setProduct(response);
        setLoading(false);
      });
    }, 2000);
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          product.map((e) => (
            <Item
              title={e.title}
              price={e.price}
              id={e.id}
              thumbnail={e.thumbnail}
              key={e.id}
            />
          ))
        )}
      </div>
    </>
  );
};
export default ItemList;
