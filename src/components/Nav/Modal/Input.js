import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.scss";

export default function Input({
  type,
  text,
  status,
  unValidClass,
  getUserInfo,
  value,
  errorMessage,
  handleValid,
  onReset,
}) {
  const [isUnValidEmail, setIsUnValidEmail] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const isValid = handleValid(value);

  const UnValidIcon = () => {
    return (
      <>
        <i
          className="fa-solid fa-circle-xmark deleteBtn"
          onClick={inputValueHandle}
        />
        <i className="fa-solid fa-circle-exclamation warningBtn " />
        <p className="unValidMessage">{errorMessage}</p>
      </>
    );
  };

  const ValidIcon = () => {
    return (
      <>
        <i
          className="fa-solid fa-circle-xmark deleteBtn"
          onClick={inputValueHandle}
        />
        <i className="fa-regular fa-lg fa-circle-check checkBtn" />
      </>
    );
  };

  const isValidHandle = () => {
    if (isValid) {
      setIsValidEmail(true);
      setIsUnValidEmail(false);
    } else if (value.length < 1) {
      setIsUnValidEmail(false);
      setIsValidEmail(false);
    } else {
      setIsValidEmail(false);
      setIsUnValidEmail(true);
    }
  };

  const inputValueHandle = () => {
    setIsUnValidEmail(false);
    setIsValidEmail(false);
    onReset();
  };

  useEffect(() => {
    inputValueHandle();
  }, [status]);

  return (
    <div className="loginFormInput">
      <input
        className={isUnValidEmail ? unValidClass : null}
        type={type === "signPassword" ? "password" : type}
        name={type}
        value={value}
        placeholder={text}
        onChange={getUserInfo}
        onKeyUp={isValidHandle}
      />
      {isUnValidEmail ? <UnValidIcon /> : null}
      {isValidEmail ? <ValidIcon /> : null}
    </div>
  );
}
{
  /* <i className="fa-solid fa-circle-xmark deleteBtn" /> */
}
