import React from 'react';

const Greetings = ({saludo}) => {
  return <h1 className="display-4">{saludo}</h1>;
}


const styles = {
            backgroundColor: '#e9ecef',
            color:"#00CED1",
            fontFamily: "Trebuchet MS",
            height: "100vh"
          
            
    }

const Home = () => {
    
    return (
        <>
        <div style={styles} className="d-flex justify-content-center align-items-center">
      <Greetings saludo="Bienvenido a TIEND-APP"/>
        </div>
    </>
    
        );
}




export default Home;