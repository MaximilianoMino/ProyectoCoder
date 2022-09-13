import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const styles = { color: "white", backgroundColor: "white", width: "70%" };

  return (
    <>
      <footer className="container-fluid text-white bg-dark mt-5 pb-5 pt-3">
        <div className="row">
          <div className="m-auto">
            <p className="h4 font-weight-bold ">¡Seguime en mis redes!</p>
          </div>
          <div className="col-12 mt-3 d-flex justify-content-center">
            <FontAwesomeIcon
              className="text-white h1 mx-4 "
              icon={faFacebook}
            />

            <p>
              <FontAwesomeIcon
                className="text-white h1 mx-4"
                icon={faLinkedin}
              />
            </p>
            <p>
              <FontAwesomeIcon className="text-white h1 mx-4" icon={faGithub} />
            </p>
            <p>
              <FontAwesomeIcon
                className="text-white h1 mx-4"
                icon={faTwitter}
              />
            </p>
          </div>
          <hr style={styles} className="bg-white h1"></hr>
          <div className="col-12 mt-2 text-center ">
            <p className="blockquote-footer text-white">
              Copyright{" "}
              <FontAwesomeIcon className="text-white mr-1" icon={faCopyright} />
              Maximiliano Miño
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
