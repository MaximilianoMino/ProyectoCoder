
import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../../components/Item/Item";
import { getHomeProducts } from "../../firebase/productsHome";
import './categoryList.scss'
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";




const CategoryList = ({category}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { cat } = useParams();  
  
  
  useEffect(() => {
    setTimeout(() => {
      getHomeProducts(cat).then((response) => {
        setProducts(response);
        setLoading(true);
      });
    }, 1000);
  }, [cat]);


  //FILTROS

  //Filtrando las camaras

  const productsCamera = products.filter(
    (product) => product.category_id === "Cámaras"
  );

  //Filtro la categoria camaras

  const catCamera = category.filter(
    (categorie) => categorie.name === "Cámaras"
  );


  //Filtrando lo s objetivos
  const productsObjetives = products.filter(
    (product) => product.category_id === "Objetivos"
  );

  //Filtro la categoria objetivos

  const catObjetives = category.filter(
    (categorie) => categorie.name === "Objetivos"
  );

  //Filtro los productos que pertenezcan a la categoria accesorios
  const productAccessories = products.filter(
    (product) => product.category_id === "Accesorios"
  );

  //Filtro la categoria accesorios
  const catAcce = category.filter(
    (categorie) => categorie.name === "Accesorios"
  );

  //Filtro los productos que pertenezcan a la categoria drones
  const productDrones = products.filter(
    (product) => product.category_id === "Drones"
  );

  //Filtro la categoria drones
  const catDrones = category.filter(
    (categorie) => categorie.name === "Drones"
  );



  return (
    <>
      {/* CAMARAS */}
{ loading === false ? <Spinner /> :
      <div>{catCamera.map((categorie) => {
        return (
          <div className="my-5">
            <div className="title-box">
              <p className="h2">{categorie.name}</p>
            </div> 
            <Link to="/categories/Cámaras">
            <img src={categorie.thumbnail} alt={categorie.name} width="100%" />
           </Link>
          </div>
        );
      })}

      {catCamera
        ?   productsCamera.map((product) => {
            return (
              <Item
                title={product.title}
                price={product.price}
                id={product.id}
                thumbnail={product.thumbnail}
                key={product.id}
              />
            );
          })
        : null}

      {/* OBJETIVOS */}

      {catObjetives.map((categorie) => {
        return (
          <div className="my-5">
            <div className="title-box">
              <p className="h2">{categorie.name}</p>
            </div>
            <img src={categorie.thumbnail} alt={categorie.name} width="100%" />
          </div>
        );
      })}

      {catObjetives
        ?   productsObjetives.map((product) => {
            return (
              
              <Item
                title={product.title}
                price={product.price}
                id={product.id}
                thumbnail={product.thumbnail}
                key={product.id}
              />
            );
          })
        : null}

      {/* ACCESORIOS */}
      {catAcce.map((categorie) => {
        return (
          <div className="my-5">
            <div className="title-box">
              <p className="h2">{categorie.name}</p>
            </div>
            <img src={categorie.thumbnail} alt={categorie.name} width="100%" />
          </div>
        );
      })}

      {catAcce
        ? productAccessories.map((product) => {
            return (
              <Item
                title={product.title}
                price={product.price}
                id={product.id}
                thumbnail={product.thumbnail}
                key={product.id}
              />
            );
          })
   
        : null}

      {/* Drones */}
      {catDrones.map((categorie) => {
        return (
          <div className="my-5">
            <div className="title-box">
              <p className="h2">{categorie.name}</p>
            </div>
            <img src={categorie.thumbnail} alt={categorie.name} width="100%" />
          </div>
        );
      })}

      {catDrones
        ? 
         productDrones.map((product) => {
            return (
              <Item
                title={product.title}
                price={product.price}
                id={product.id}
                thumbnail={product.thumbnail}
                key={product.id}
              />
            );
          })
       
        : null}
        </div>
        }
    </>
  );
}

export default CategoryList
