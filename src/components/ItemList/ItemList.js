import React, {useState,useEffect} from 'react';
import Item from '../Item/Item'
import {getProducts} from '../Api/dataBase';

 const ItemList = () => {

const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {

setTimeout(() => {

getProducts()
  .then(response => {
  return response.json();


}).then((response) => {
setProduct(response.results)
setLoading(false);
});
}, 3000)
},[])

 

    return (
      <>
      <div> 
        {loading ? <h1 className="text-center">Loading...</h1>:
  (product.map(e =>  <Item title={e.title} price={e.price} id={e.id} thumbnail={e.thumbnail}  />))
}
        </div>
      </>
    )
}
export default ItemList

