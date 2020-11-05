import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';


const App = () => {
    return ( <>
        <NavBar />
        <Home greetings="Bienvenidos a TIEND-APP"/>
        
        </>
    );
}


export default App;