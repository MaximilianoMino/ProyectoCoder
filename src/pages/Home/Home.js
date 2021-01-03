import React from "react";
import './home.scss'
import CategoriesContainer from "../../components/categoriesContainer/CategoriesContainer";
import Header from "../../components/Header/Header";
import logo from '../../assets/images/logoo.png'





const Home = ({ greetings }) => {




  return (
    <>
    <div className="customContainer">
      <Header />
    </div>
    <div className="d-flex justify-content-center py-5">
      <img src={logo} className="px-auto" />
      </div>
      <hr></hr>
      <CategoriesContainer />
    </>
  );
};

export default Home;
