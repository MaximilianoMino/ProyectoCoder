import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import { CartProvider } from "./context/CartContext";
import UserForm from '../src/components/Form/UserForm';
import Categories from "./components/categories/Categories";



const App = () => {
  return (
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
            <Home greetings="SHOOTINGSTORE" />
          </Route>
          <Route exact path="/detalle/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/categories/:cat?">
              <Categories />
          </Route>
        
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
