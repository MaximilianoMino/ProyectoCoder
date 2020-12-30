
import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import Item from "../../components/Item/Item";
import { getProducts } from "../../firebase/dataBase";

const CategoryList = ({category}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { cat } = useParams();

  useEffect(() => {
    setTimeout(() => {
      getProducts(cat).then((response) => {
        setProducts(response);
        setLoading(true);
      });
    }, 1000);
  }, [cat]);



  return (
    <>

  <div>
    <h1>{category.name}</h1>
    <img src={category.thumbnail} alt={category.name} width="100%"/>
    </div>


      {loading === false ? (
        <i className="spinner-border"></i>
      ) : cat ? (
        products.map((product) => {
          return (
            <div
              key={product.id}
              className="d-flex justify-content-center flex-row"
            >
              {
                <Item
                  title={product.title}
                  price={product.price}
                  id={product.id}
                  thumbnail={product.thumbnail}
                  key={product.id}
                />
              }
            </div>
          );
        })
      ) : (
        <ItemList />
      )}
    </>
  );
}

export default CategoryList
