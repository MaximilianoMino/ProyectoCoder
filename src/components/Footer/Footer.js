import React from "react";
import "./footer.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const styles = {
    color: "white",
    backgroundColor: "white",
    width: "100%",
    marginBottom: ".5em",
  };

  return (
    <>
      <footer className="container-fluid text-white bg-dark mt-5 pb-5 pt-3">
        <div className="row">
          <div className="m-auto">
            <p className="h4 font-weight-bold ">¡Seguime en mis redes!</p>
          </div>
          <div className="col-12 mt-3 d-flex justify-content-center">
            <p>
              <BsLinkedin className="text-white h1 mx-4" />
            </p>
            <p>
              <BsGithub className="text-white h1 mx-4" />
            </p>
          </div>
          <hr style={styles} className="bg-white h1"></hr>
          <div className="col-12 mt-2 text-center ">
            <p className="blockquote-footer text-white">
              Copyright Maximiliano Miño
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
