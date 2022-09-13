import React from "react";
import { useState } from "react";
import Auth from "../../auth/Auth";
import "./usericon.css";

const UserIcon = () => {
  const [userAuth, setUserAuth] = useState(false);
  return (
    <>
      <div className="user-icon-wrap">
        <i
          className="fas fa-user-circle"
          width="40px"
          height="40px"
          alt="logo"
          /*  onClick={() => setUserAuth(true)} */
        ></i>
        {userAuth && <Auth setUserAuth={setUserAuth} />}
      </div>
    </>
  );
};

export default UserIcon;
