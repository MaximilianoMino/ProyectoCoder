import React from "react";

const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const MailPass = ({ register, errors, showPassword, setShowPassword }) => {
  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i class="fa fa-user"></i>
          </span>
        </div>
        <div className="input-control">
          <input
            type="email"
            className="form-control"
            placeholder="Correo electronico"
            name="email"
            ref={register({
              required: { value: true, message: "Este campo es obligatorio." },
              pattern: { value: re, message: "Correo no valido." },
            })}
          />{" "}
          {errors.email && (
            <span className="validate_errors">{errors.email.message}</span>
          )}
        </div>
      </div>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i class="fa fa-lock"></i>
          </span>
        </div>
        <div className="input-control">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Contraseña"
            name="password"
            ref={register({
              required: { value: true, message: "Este campo es obligatorio." },

              pattern: {
                value: passRe,
                message:
                  "Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula y un número.",
              },
            })}
          />
          {showPassword ? (
            <i
              className="fa fa-eye-slash "
              onClick={() => setShowPassword(false)}
            ></i>
          ) : (
            <i class="fa fa-eye" onClick={() => setShowPassword(true)}></i>
          )}
          {errors.password && (
            <span className="validate_errors">{errors.password.message}</span>
          )}{" "}
        </div>
      </div>
    </>
  );
};

export default MailPass;
