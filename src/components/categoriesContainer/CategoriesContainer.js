import React from "react";
import { useState, useEffect } from "react";
import ProductsService from "../../services/firebase/productsService";
import CategoryList from "../categoryList/CategoryList";
import { getHomeProducts } from "../../services/firebase/productsHome";

const productsService = new ProductsService();
const CategoriesContainer = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    productsService.getCategories().then((response) => {
      setCategory(response);
    });
    setTimeout(() => {
      getHomeProducts().then((response) => {
        setProducts(response);
        setLoading(true);
      });
    }, 2000);
  }, []);

  return (
    <div>
      {category.map((e) => {
        return (
          <CategoryList
            category={e}
            key={e.id}
            products={products}
            loading={loading}
          />
        );
      })}
    </div>
  );
};

export default CategoriesContainer;
