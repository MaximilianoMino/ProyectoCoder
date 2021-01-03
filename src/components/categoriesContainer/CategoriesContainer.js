import React from 'react'
import { useState, useEffect } from 'react';
import Categories from "../categories/Categories";
import { getCategories } from "../../firebase/dataBase";
import CategoryList from '../categoryList/CategoryList';


const CategoriesContainer = () => {
const [category, setCategory] = useState([]);





    useEffect(() => {
      getCategories().then((response) => {
         setCategory([response]);    
         console.log(response)

      });
    }, []);
    
    

  return (
    <div>
      {
        category.map((e) => { return <CategoryList category={e} key={e.id} />
    })
      }
    </div>
  );
}

export default CategoriesContainer
