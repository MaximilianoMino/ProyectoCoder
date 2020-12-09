import { getFirestore } from "./index";



export const getProducts = () => {

    return new Promise((resolve, reject) => {

       const products = getFirestore().collection("products").where('price', '>', 500);
       products.get().then((response) =>{

        console.log(response)
         if(response.size === 0){
           reject('No hay registros');
         }
         const data = (response.docs.map(doc => doc.data()));
         console.log(data)
         resolve(data);
       })
    })

}



