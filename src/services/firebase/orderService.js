/* eslint-disable no-unused-vars */
import { getFirestore } from "./index";

export default class {
    async saveOrder(order) {
        try {
            let ordersCol;
            let generateOrder;
            let response;
            ordersCol = getFirestore().collection("Orders");
            generateOrder = await ordersCol.add(order);
            if (!generateOrder.id) response = "Hubo problemas para generar la orden";
            response = generateOrder.id;
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}