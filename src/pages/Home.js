import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import Item from "../components/Item/Item";
import { getProducts} from '../firebase/dataBase'



const Home = ({ greetings }) => {
const [products, setProducts] = useState([]);

const {cat} = useParams();

useEffect(() => {
getProducts(cat)
 .then((response)=>{
  setProducts(response)
 })
}, [cat])

  return (
    <>
      <div>
        <h1 className="text-center py-5">{greetings}</h1>
        <hr></hr>
      {cat ? products.map((product)=>{
        return (
           <div key={product.id} className="d-flex justify-content-between">
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
      }):
        <ItemList />}
      </div>
    </>
  );
};

export default Home;
