import { getFirestore } from "./index";

export default class {
    async getProductsFromCat(categoryId) {
        try {
            let response;
            let query;
            let collection;
            let size;
            let productsRetrieved;
            collection = getFirestore().collection("products");
            if (categoryId)
                query = collection.where("category_id", "==", `${categoryId}`);

            size = (await query.get()).size;

            if (size === 0) {
                response = "No hay productos.";
            } else {
                productsRetrieved = (await query.get()).docs.map((doc) => ({
                    ...doc.data(),
                    idFirebase: doc.id,
                }));

                response = productsRetrieved;
            }
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getProductsById(id) {
        try {
            let productRetrieved;
            let size;
            let response;

            productRetrieved = getFirestore().collection("products").doc(id);
            size = (await productRetrieved.get()).size;
            if (size === 0) response = `No existen productos con el id ${id}`;
            else productRetrieved = (await productRetrieved.get()).data();

            response = productRetrieved;
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getCategories() {
        try {
            let collection;
            let size;
            let response;
            let categoriesRetrieved;

            collection = getFirestore().collection("Categories");

            size = (await collection.get()).size;

            if (size === 0) response = `No hay registros`;

            categoriesRetrieved = (await collection.get()).docs.map((doc) => ({
                ...doc.data(),
                idFirebase: doc.id,
            }));

            response = categoriesRetrieved;
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}