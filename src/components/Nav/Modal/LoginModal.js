import React from "react";
import Form from "./Form";
import "./Modal.scss";

const LoginModal = ({
  type,
  title,
  inputData,
  handleModal,
  handleProfileNav,
}) => {
  return (
    <div className="loginModalContainer">
      <div className="loginModal">
        <Form
          type={type}
          title={title}
          inputData={inputData}
          handleModal={handleModal}
          handleProfileNav={handleProfileNav}
        />
      </div>
    </div>
  );
};

export default LoginModal;
