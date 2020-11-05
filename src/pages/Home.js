import React from 'react';
import ItemCount from '../components/ItemCount/ItemCount';





const styles = {
            backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
            color:"#00000",
            fontFamily: "Trebuchet MS",
            height: "100vh"
          
            
    }

const Home = ({greetings}) => {
    
    return (
        <>
       
        <div style={styles}>
        
        <h1 className="text-center py-5" >{greetings}</h1>
       <hr></hr>
        <ItemCount initial={0} max={10} min={0} />
        </div>
        </>
    
        );
}




export default Home;