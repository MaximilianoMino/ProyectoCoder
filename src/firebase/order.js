import { getFirestore } from "./index";




const addOrder = (order) => {

    new Promise((resolve, reject) => {
        const orders = getFirestore()
            .collection("orders");
        orders.add(order)
            .then(({ id }) => {
                if (!id) reject("No se pudo guardar la orden");
                resolve(id);
            });
    });
}
export default addOrder