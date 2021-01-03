
import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Item from "../../components/Item/Item";
import { getProducts } from "../../firebase/dataBase";
import './categoryList.scss'


const CategoryList = ({category}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { cat } = useParams();

  //FILTROS

  //Filtrando las camaras

  const productsCamera = products.filter(
    (product) => product.category_id === "Cámaras"
  );

  //Filtro la categoria camaras

  const catCamera = category.filter(
    (categorie) => categorie.name === "Cámaras"
  );

  console.log(productsCamera);

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

  console.log(productAccessories);
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

  console.log(typeof catAcce);
  console.log(catAcce);

  useEffect(() => {
    setTimeout(() => {
      getProducts(cat).then((response) => {
        setProducts(response);
        setLoading(true);
      });
    }, 1000);
  }, [cat]);

  console.log(category.name);
  return (
    <>
      {/* CAMARAS */}
{ loading === false ? <p className="spinner-border"></p> :
      <div>{catCamera.map((categorie) => {
        return (
          <div className="my-5">
            <div className="title-box">
              <p className="h2">{categorie.name}</p>
            </div>
            <img src={categorie.thumbnail} alt={categorie.name} width="100%" />
          </div>
        );
      })}

      {catCamera
        ?  <Carousel>
        <Carousel.Item interval={1000}>
        { productsCamera.map((product) => {
            return (
              <Item
                title={product.title}
                price={product.price}
                id={product.id}
                thumbnail={product.thumbnail}
                key={product.id}
              />
            );
          })}
        </Carousel.Item>
        </Carousel>
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
        ?  <Carousel>
        <Carousel.Item interval={1000}>
        { productsObjetives.map((product) => {
            return (
              
              <Item
                title={product.title}
                price={product.price}
                id={product.id}
                thumbnail={product.thumbnail}
                key={product.id}
              />
            );
          })}
        </Carousel.Item>
        </Carousel> 
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
        ?  <Carousel>
        <Carousel.Item interval={1000}>
         {productAccessories.map((product) => {
            return (
              <Item
                title={product.title}
                price={product.price}
                id={product.id}
                thumbnail={product.thumbnail}
                key={product.id}
              />
            );
          })}
        </Carousel.Item>
        </Carousel> 
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
        ?  <Carousel>
        <Carousel.Item interval={1000}>
         {productDrones.map((product) => {
            return (
              <Item
                title={product.title}
                price={product.price}
                id={product.id}
                thumbnail={product.thumbnail}
                key={product.id}
              />
            );
          })}
        </Carousel.Item>
        </Carousel> 
        : null}
        </div>
        }
    </>
  );
}

export default CategoryList
