import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  let productsInStorage = JSON.parse(localStorage.getItem("Products"));
  if (!productsInStorage) {
    productsInStorage = [];
  }

  const [productArray, setProductArray] = useState(productsInStorage);
  //Agregar y traer productos del storage

  useEffect(() => {
    if (productsInStorage) {
      localStorage.setItem("Products", JSON.stringify(productArray));
    } else {
      localStorage.setItem("Products", JSON.stringify([]));
    }
  }, [productArray, productsInStorage]);

  //Agregar producto al carrito

  const addProductToCart = (newValue, quantity) => {
    //Buscar en el array si existe el producto
    const productExist = productArray.find((element) => {
      return element.id === newValue.id;
    });

    //Si existe sumar cantidad

    if (productExist) {
      productExist.quantity += quantity;
      setProductArray([...productArray]);
    } else {
      //Si no existe, agregamos el prod

      setProductArray([...productArray, { ...newValue, quantity }]);
    }
  };

  //Sumar valor de todos los productos

  const getGrandTotal = () => {
    return productArray.reduce((acc, p) => (acc += p.price * p.quantity), 0);
  };

  //Eliminar producto del carrito

  const deleteProduct = (id) => {
    productArray.splice(
      productArray.findIndex((p) => p.id === id),
      1
    );

    setProductArray([...productArray]);
  };

  //Vaciar carrito

  const clearCart = () => {
    setProductArray([]);
  };

  //Cantidad de productos en el carrito
  const getCartIconQuantity = () => {
    return productArray.reduce((acc, p) => (acc += p.quantity), null);
  };

  return (
    <CartContext.Provider
      value={{
        productArray,
        addProductToCart,
        clearCart,
        getCartIconQuantity,
        deleteProduct,
        getGrandTotal,
      }}
    >
      {children}{" "}
    </CartContext.Provider>
  );
};

export default useCartContext;
