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
  const [isUnValidInfo, setIsUnValidInfo] = useState(false);
  const [isValidInfo, setIsValidInfo] = useState(false);

  const isValid = handleValid(value);

  const UnValidIcon = () => {
    return (
      <>
        <i className="fa-solid fa-circle-exclamation warningBtn " />
        <p className="unValidMessage">{errorMessage}</p>
      </>
    );
  };

  const ValidIcon = () => {
    return <i className="fa-regular fa-lg fa-circle-check checkBtn" />;
  };

  const isValidHandle = () => {
    if (isValid) {
      setIsValidInfo(true);
      setIsUnValidInfo(false);
    } else if (value.length < 1) {
      setIsUnValidInfo(false);
      setIsValidInfo(false);
    } else {
      setIsValidInfo(false);
      setIsUnValidInfo(true);
    }
  };

  const inputEffectOff = () => {
    setIsUnValidInfo(false);
    setIsValidInfo(false);
    onReset();
  };

  useEffect(() => {
    inputEffectOff();
  }, [status]);

  return (
    <div className="loginFormInput">
      <input
        className={isUnValidInfo ? unValidClass : null}
        type={type === "signPassword" ? "password" : type}
        name={type}
        value={value}
        placeholder={text}
        onChange={getUserInfo}
        onKeyUp={isValidHandle}
      />
      {isUnValidInfo ? <UnValidIcon /> : null}
      {isValidInfo ? <ValidIcon /> : null}
    </div>
  );
}
{
  /* <i className="fa-solid fa-circle-xmark deleteBtn" /> -> 삭제버튼 */
}
