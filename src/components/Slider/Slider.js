import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import Item from '../Item/Item'
import { getProducts } from "../../firebase/dataBase";
const Slider = () => {

   const [product, setProduct] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     setTimeout(() => {
       getProducts().then((response) => {
         setProduct(response);
         setLoading(false);
       });
     }, 2000);
   }, []);



  return (

    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
         
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Slider
