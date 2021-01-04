import { getFirestore } from "./index";



export const getHomeProducts = (cat) => {
    return new Promise((resolve, reject) => {
        let products = getFirestore().collection("products").limit(9);
        console.log("cat " + cat);
        if (cat) products = products.where("category_id", "==", `${cat}`);
        products.get().then((response) => {
            if (response.size === 0) {
                reject("No hay registros");
            }

            const data = response.docs.map((doc) => ({
                ...doc.data(),
                idFirebase: doc.id,
            }));
            console.log("get products" + data);
            resolve(data);
        });
    });
};