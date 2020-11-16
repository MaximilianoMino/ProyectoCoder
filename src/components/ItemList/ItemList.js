import React, {useState,useEffect} from 'react';
import Item from '../Item/Item'
 

const ItemList = () => {

const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {

setTimeout(() => {

const datos = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1055'

fetch (datos)
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
      <div> {loading ? <h1 className="text-center">Loading...</h1>:
     <Item product={product}/>}
    
        </div>
      </>
    )
}

export default ItemList
