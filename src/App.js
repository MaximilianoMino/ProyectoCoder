import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import { CartProvider } from "./context/CartContext";
import UserForm from '../src/components/Form/UserForm';
import Categories from "./components/categories/Categories";
import Footer from "./Footer/Footer";



const App = () => {
  return (
    <div>
    <CartProvider>
      <BrowserRouter> 
   
        <NavBar />
        <Switch>    
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path ="/order">
            <UserForm />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detalle/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/categories/:cat?">
              <Categories />
          </Route>
        
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    </div>
  );
};

export default App;
