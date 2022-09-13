import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import Item from "../../components/Item/Item";
import ProductsService from "../../services/firebase/productsService";
import Spinner from "../Spinner/Spinner";
import FilterProducts from "../filter/FilterProducts";

const productsService = new ProductsService();

const flyer = {
  backgroundImage:
    "url(https://images.pexels.com/photos/4473400/pexels-photo-4473400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
};

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const { cat } = useParams();

  console.log(search);

  useEffect(() => {
    setTimeout(() => {
      productsService.getProductsFromCat(cat).then((response) => {
        setProducts(response);
        setLoading(true);
      }, 1000);
    });
  }, [cat]);

  const filteredProducts = () => {
    products.filter((product) => {
      let response = product.title.toLowerCase().includes(search.toLowerCase());
      console.log(response);
      return response;
    });
  };

  return (
    <>
      <div style={flyer} className="container-fluid"></div>
      <FilterProducts
        setSearch={setSearch}
        filteredProducts={filteredProducts}
      />
      {loading === false ? (
        <Spinner />
      ) : cat ? (
        <div className="d-flex justify-content-center flex-wrap mx-3">
          {products
            .filter((product) => {
              if (search === "") {
                return product;
              } else if (
                product.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return product;
              }
            })
            .map((product) => {
              return (
                <Item
                  title={product.title}
                  price={product.price}
                  id={product.id}
                  thumbnail={product.thumbnail}
                  key={product.id}
                />
              );
            })}
        </div>
      ) : (
        <ItemList />
      )}
    </>
  );
};

export default Categories;
