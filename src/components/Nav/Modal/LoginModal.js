import React from "react";
import "./../Nav.scss";
import Form from "./Form";

const LoginModal = ({
  type,
  title,
  inputData,
  setSignUpModalOn,
  setLoginModalOn,
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
        />
      </div>
    </div>
  );
};

export default LoginModal;
