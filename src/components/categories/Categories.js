import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import Item from "../../components/Item/Item";
import { getProducts } from "../../firebase/dataBase";
import Spinner from '../Spinner/Spinner'


const Categories = ({category}) => {

const flyer = {
  backgroundImage:
    "url(https://images.pexels.com/photos/4473400/pexels-photo-4473400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
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
 <div style={flyer} className="container-fluid"></div>
 
      {loading === false ? (
       <Spinner />
      ) : cat ? (
        products.map((product) => {
          return (
         
              
                <Item
                  
                  title={product.title}
                  price={product.price}
                  id={product.id}
                  thumbnail={product.thumbnail}
                  key={product.id}
                />
              
            
          );
        })
      ) : (
        <ItemList />
      )}
      
    </>
    
  );
}

export default Categories
