import React from 'react'
import pic4 from "../../assets/images/pic4.jpg";
import drone2 from "../../assets/images/drone2.jpg";
import lente2 from "../../assets/images/lente2.jpg";
import pic5 from "../../assets/images/pic5.jpg";
import Carousel from "react-bootstrap/Carousel";
import './header.scss'

const Header = () => {
  return (
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block customContainer"
              src={pic4}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block customContainer"
              src={lente2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block customContainer"
              src={drone2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 customContainer"
              src={pic5}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
  );
}

export default Header
