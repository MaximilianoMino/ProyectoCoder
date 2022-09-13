import React from "react";
import Form from "../form/Form";
const message = {
  question: "¿Ya tienes cuenta?",
  invite: "Inicia sesion",
  btnTxt: "Registrate",
};
const Register = ({
  handleGoogleAuth,
  setLogin,
  login,
  setUserAuth,
  handleFacebookSignIn,
}) => {
  return (
    <Form
      message={message}
      handleFacebookSignIn={handleFacebookSignIn}
      handleGoogleAuth={handleGoogleAuth}
      setLogin={setLogin}
      login={login}
      setUserAuth={setUserAuth}
    />
  );
};

export default Register;
