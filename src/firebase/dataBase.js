import { getFirestore } from "./index";

export const getProducts = (cat) => {


    return new Promise((resolve, reject) => {

       let products = getFirestore().collection("products");
        
       if(cat) products =  products.where("category_id", "==", `${cat}`);
      
        console.log("cat: " + cat);

       console.log("products: " + products)
     
  
       products.get().then((response) =>{

         if(response.size === 0){
           reject('No hay registros');
         }
       /*   const data = (response.docs.map(doc => doc.data())); */
       const data = response.docs.map((doc) => ({ ...doc.data(), idFirebase: doc.id }));

         console.log(data)
         resolve(data);
       })
    })

  }

export const getProductsById = (id) => {

    return new Promise((resolve, reject) => {

     const query = getFirestore().collection('products').doc(id);

     query.get().then((response) => {
       if (response.size === 0) reject("empty");

       const data = { ...response.data(), id: response.id }

       console.log('data: ' + data)
       resolve(data);
     });
       
    })
  }

  export const getCategories = () => {


    return new Promise((resolve, reject) => {
      const categories = getFirestore().collection("Categories");

      console.log("categories: " + categories);

      categories.get().then((response) => {
        if (response.size === 0) {
          reject("No hay registros");
        }
        const data = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        
        resolve(data);
        console.log('categories: '+data);
      });
    });

  }