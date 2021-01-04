import { getFirestore } from "./index";

export const getProducts = (cat) => {


    return new Promise((resolve, reject) => {

        let products = getFirestore().collection("products");
        console.log("cat " + cat)
        if (cat) products = products.where("category_id", "==", `${cat}`);
        products.get().then((response) => {

            if (response.size === 0) {
                reject('No hay registros');
            }

            const data = response.docs.map((doc) => ({...doc.data(), idFirebase: doc.id }));
            console.log("get products" + data)
            resolve(data);
        })
    })

}

export const getProductsById = (id) => {

    return new Promise((resolve, reject) => {

        const query = getFirestore().collection('products').doc(id);

        query.get().then((response) => {
            if (response.size === 0) reject(`<h1>empty</h1>`);

            // const data = {...response.data(), id: response.id }
            //  console.log('data: ' + data)
            console.log("productbyid" + response.data())
            resolve(response.data());
        });

    })
}

export const getCategories = () => {


    return new Promise((resolve, reject) => {
        const categories = getFirestore().collection("Categories");


        categories.get().then((response) => {
            if (response.size === 0) {
                reject("No hay registros");
            }
            const data = response.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            console.log("categories" +
                data)
            resolve(data);
        });
    });

}