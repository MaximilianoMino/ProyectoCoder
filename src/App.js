import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Switch, Route} from 'react-router-dom';



const App = () => {
    return ( 
    <BrowserRouter>
    <NavBar /> 
    <Switch>
        <Route exact path="/detalle">     
       <Home greetings="Bienvenidos a TIEND-APP"/>

       </Route>
      
      <Route>

          <ItemDetailContainer exact path="/itemcontainer" />
      </Route>
        </Switch>
        </BrowserRouter>
        
    );
}


export default App;