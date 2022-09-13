import React from "react";
import Form from "../form/Form";

const message = {
  question: "¿Todavia no te registraste?",
  invite: "Registrate",
  btnTxt: "Inicia sesion",
};
const Login = ({
  handleGoogleAuth,
  handleFacebookSignIn,
  setLogin,
  login,
  setUserAuth,
  mailPassService,
}) => {
  return (
    <>
      <Form
        handleGoogleAuth={handleGoogleAuth}
        handleFacebookSignIn={handleFacebookSignIn}
        message={message}
        setLogin={setLogin}
        login={login}
        setUserAuth={setUserAuth}
        mailPassService={mailPassService}
      />
    </>
  );
};

export default Login;
