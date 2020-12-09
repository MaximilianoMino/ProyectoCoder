import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import { getProducts } from "../../firebase/dataBase";

const ItemList = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getProducts()
       
        .then((response) => {
          setProduct(response);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        {loading ? (
          <i className="spinner-border"></i>
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
