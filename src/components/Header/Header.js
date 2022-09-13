import React from "react";
import camera from "../../assets/images/camera.jpg";
import drone2 from "../../assets/images/drone.jpg";
import lente2 from "../../assets/images/lente2.jpg";
import accessories from "../../assets/images/accessories.jpg";
import Carousel from "react-bootstrap/Carousel";
import "./header.scss";
import { Link } from "react-router-dom";
import AnimatedText from "react-animated-text-content";

const data = [
  { name: "Cámaras", thumbnail: camera },
  { name: "Accesorios", thumbnail: accessories },
  { name: "Objetivos", thumbnail: lente2 },
  { name: "Drones", thumbnail: drone2 },
];

const Header = () => {
  return (
    <>
      <header>
        <Carousel>
          {data.map((e, i) => {
            return (
              <Carousel.Item interval={3000} key={i}>
                <Link to={`/categories/${e.name}`}>
                  {" "}
                  <AnimatedText
                    type="chars"
                    interval={0.14}
                    duration={1.19}
                    animation={{
                      x: "15px",
                      y: "100px",
                      ease: "ease-in",
                      scale: 0.09,
                    }}
                    className="pl-3 p-slider"
                  >
                    {e.name}
                  </AnimatedText>
                  <img
                    className="d-block customContainer"
                    src={e.thumbnail}
                    alt="First slide"
                  />
                </Link>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </header>
    </>
  );
};

export default Header;
