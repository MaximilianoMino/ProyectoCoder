import React from "react";

const FullName = ({ register, errors }) => {
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
            type="text"
            className="form-control"
            placeholder="Nombre"
            name="name"
            ref={register({
              required: { value: true, message: "Este campo es obligatorio." },
            })}
          />{" "}
          {errors.name && (
            <span className="validate_errors">{errors.name.message}</span>
          )}
        </div>{" "}
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i class="fa fa-user"></i>
          </span>
        </div>
        <div className="input-control">
          <input
            type="text"
            className="form-control"
            placeholder="Apellido"
            name="lastname"
            ref={register({
              required: { value: true, message: "Este campo es obligatorio." },
            })}
          />{" "}
          {errors.lastname && (
            <span className="validate_errors">{errors.lastname.message}</span>
          )}
        </div>{" "}
      </div>
    </>
  );
};

export default FullName;
