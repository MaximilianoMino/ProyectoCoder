import React from 'react';
import ItemList from '../components/ItemList/ItemList';




const styles = {
            backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
            color:"#00000",
            fontFamily: "Trebuchet MS"
          
          
            
    }

const Home = ({greetings}) => {
     
    return (
        <>
       
        <div style={styles}>
        
        <h1 className="text-center py-5" >{greetings}</h1>
       <hr></hr>
        
     
        <ItemList />
        </div>
        </>
    
        );
}




export default Home;