import React from "react";
import "./Nav.scss";

const LogoutNav = ({ handleModal }) => {
  return (
    <>
      <li className="loginBtn">
        <button onClick={() => handleModal("login")}>로그인</button>
      </li>
      <li className="signInBtn">
        <button onClick={() => handleModal("signup")}>회원가입</button>
      </li>
    </>
  );
};

export default LogoutNav;
