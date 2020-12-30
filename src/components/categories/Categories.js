import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import Item from "../../components/Item/Item";
import { getProducts } from "../../firebase/dataBase";


const Categories = ({category}) => {

const flyer = {
  backgroundImage:
    "url(https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
};


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
 <div style={flyer}></div>

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

export default Categories
