import React from "react";
import Form from "./Form";
import "./Modal.scss";

const LoginModal = ({
  type,
  title,
  inputData,
  setSignUpModalOn,
  setLoginModalOn,
  unValidClass,
  loginModalOn,
  signUpModalOn,
}) => {
  return (
    <div className="loginModalContainer">
      <div className="loginModal">
        <Form
          type={type}
          title={title}
          inputData={inputData}
          setSignUpModalOn={setSignUpModalOn}
          setLoginModalOn={setLoginModalOn}
          unValidClass={unValidClass}
          loginModalOn={loginModalOn}
          signUpModalOn={signUpModalOn}
        />
      </div>
    </div>
  );
};

export default LoginModal;
