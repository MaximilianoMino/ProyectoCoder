import { getFirestore } from "./index";

export const getHomeProducts = () => {
    return new Promise((resolve, reject) => {
        let products = getFirestore().collection("products");
        products.get().then((response) => {
            if (response.size === 0) {
                reject("No hay registros");
            }

            const data = response.docs.map((doc) => ({
                ...doc.data(),
                idFirebase: doc.id,
            }));
            resolve(data);
        });
    });
};