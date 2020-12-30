import React from "react";

import './home.scss'
import CategoriesContainer from "../../components/categoriesContainer/CategoriesContainer";



const Home = ({ greetings }) => {




  return (
    <>
      <div className="customContainer">
       
      </div> 
      <h1 className="text-center py-5 text-dark">{greetings}</h1>
      <hr></hr>
      <CategoriesContainer />
    </>
  );
};

export default Home;
