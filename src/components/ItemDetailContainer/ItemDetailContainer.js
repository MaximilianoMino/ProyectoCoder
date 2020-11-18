import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getProducts} from '../Api/dataBase';
const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() =>{

    setTimeout(()=>{

   
    getProducts()
    .then(response => {
  return response.json();
    })
    .then((response) =>{
      setProduct(response.results)
      setLoading(false);
      console.log(response)

    }) 
  },3000)
  },[])
  return (
    <div>
      {loading ? <h1 className="text-center">Loading...</h1>:

      <ItemDetail 
      title={product[0].title} 

      price={product[0].price}

       id={product[0].id} 

       thumbnail={product[0].thumbnail} 

       transactions={product[0].seller.seller_reputation.transactions.total}  
       
       canceled={product[0].seller.seller_reputation.transactions.canceled}

       completed={product[0].seller.seller_reputation.transactions.completed}

       seller={product[0].seller.permalink}

       cuotas={product[0].installments.quantity}

       precioCuotas={product[0].installments.amount}

       />
      }
    </div>
  )
}

export default ItemDetailContainer
