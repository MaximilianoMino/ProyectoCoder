import React, { useState } from "react";
import Login from "./login/Login";
import AuthService from "../../services/firebase/authService";
import FacebookAuthService from "../../services/firebase/auth/facebookService";

import Register from "./register/Register";

const authService = new AuthService();
const facebookAuthService = new FacebookAuthService();
const Auth = ({ setUserAuth }) => {
  const [user, setUser] = useState();
  const [login, setLogin] = useState(true);

  const handleGoogleAuth = async () => {
    let res = await authService.signInWithGoogle();
    return setUser(res);
  };

  const handleFacebookSignIn = async () => {
    let res = await facebookAuthService.signInWithFacebook();

    return setUser(res);
  };

  return (
    <>
      {login ? (
        <Login
          handleGoogleAuth={handleGoogleAuth}
          handleFacebookSignIn={handleFacebookSignIn}
          setLogin={setLogin}
          login={login}
          user={user}
          setUserAuth={setUserAuth}
        />
      ) : (
        <Register
          handleGoogleAuth={handleGoogleAuth}
          handleFacebookSignIn={handleFacebookSignIn}
          setLogin={setLogin}
          login={login}
          setUserAuth={setUserAuth}
        />
      )}
    </>
  );
};

export default Auth;
