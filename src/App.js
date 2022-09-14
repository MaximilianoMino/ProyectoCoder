import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import { CartProvider } from "./context/CartContext";
import UserForm from "../src/components/Form/UserForm";
import Categories from "./components/categories/Categories";
import Footer from "./components/Footer/Footer";
import Condiciones from "./pages/bys/Condiciones";

const App = () => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>

            <Route exact path="/cart" element={<Cart />}></Route>
            <Route exact path="/order" element={<UserForm />}></Route>
            <Route
              exact
              path="/detalle/:id"
              element={<ItemDetailContainer />}
            ></Route>
            <Route
              exact
              path="/categories/:cat"
              element={<Categories />}
            ></Route>

            <Route
              exact
              path="/basesycondiciones"
              element={<Condiciones />}
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
