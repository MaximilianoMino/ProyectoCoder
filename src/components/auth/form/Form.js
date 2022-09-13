import React from "react";
import "./form.css";
import FullName from "./fullnameinp/FullName";
import MailPass from "./mailpassinp/MailPass";
import { useForm } from "react-hook-form";
import { useState } from "react";
import MailPassService from "../../../services/firebase/auth/mailPassService";

const mailPassService = new MailPassService();

const Form = ({
  message,
  handleGoogleAuth,
  setLogin,
  login,
  setUserAuth,
  handleFacebookSignIn,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { question, invite, btnTxt } = message;

  const { register, handleSubmit, errors } = useForm();

  const handleEmailAuth = async (data, e) => {
    let res = await mailPassService.singInWithEmailAndPassword(data);

    e.target.reset();
    return res;
  };

  return (
    <div className="container-auth-form">
      <div className="auth-form-box">
        <div
          className="ml-auto"
          style={{ cursor: "pointer" }}
          onClick={() => setUserAuth(false)}
        >
          X
        </div>
        <div className="header-form">
          <h4 className="text-primary text-center">
            <i
              className="fa fa-user-circle text-white"
              style={{ fontSize: "110px" }}
            ></i>
          </h4>
          <div className="image"></div>
        </div>
        <div className="body-form">
          <form
            onSubmit={handleSubmit(handleEmailAuth)}
            novalidate="novalidate"
          >
            {!login && <FullName register={register} errors={errors} />}
            <MailPass
              register={register}
              errors={errors}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <button
              type="submit"
              className="btn btn-secondary btn-block btn-auth"
              onSubmit={() => handleEmailAuth()}
            >
              {btnTxt}
            </button>
            <div className="message">
              <span>{question}</span>
              <span
                style={{ color: "#f5f", cursor: "pointer" }}
                onClick={() => {
                  login ? setLogin(false) : setLogin(true);
                }}
              >
                {invite}
              </span>
            </div>
          </form>
          <div className="or__text">
            <hr /> <span>or</span> <hr />
          </div>
          <div className="social">
            <i
              className="fab fa-facebook"
              onClick={() => handleFacebookSignIn()}
            ></i>

            <i className="fab fa-google" onClick={() => handleGoogleAuth()}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
