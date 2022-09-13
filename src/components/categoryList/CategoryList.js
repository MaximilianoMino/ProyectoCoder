import React, { useRef } from "react";
import Item from "../../components/Item/Item";
import "./categoryList.scss";
import useDraggableScroll from "use-draggable-scroll";

import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";

const CategoryList = ({ category, products, loading }) => {
  const ref = useRef(null);
  const productFiltered = products.filter(
    (product) => product.category_id === category.name
  );
  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });

  return (
    <>
      {loading === false ? (
        <Spinner />
      ) : (
        <div className="my-5" key={category.id}>
          <div className="title-box">
            <p>{category.name}</p>
          </div>
          <Link to={`/categories/${category.name}`}>
            <img
              src={category.thumbnail}
              alt={category.name}
              width="100%"
              height="600px"
            />
          </Link>{" "}
          <div className="products-home" ref={ref} onMouseDown={onMouseDown}>
            {productFiltered.map((product) => (
              <Item
                title={product.title}
                price={product.price}
                id={product.id}
                thumbnail={product.thumbnail}
                key={product.id}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryList;
