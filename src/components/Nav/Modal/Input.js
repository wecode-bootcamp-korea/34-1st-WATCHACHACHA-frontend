import React from "react";
import { useState, useEffect } from "react";
import "./Modal.scss";

export default function Input({
  type,
  text,
  unValidClass,
  loginModalOn,
  signUpModalOn,
}) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
  });
  const { email, password, name } = userInfo;
  const [isUnValidEmail, setIsUnValidEmail] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  // useEffect(() => {
  //   console.log(userInfo);
  // }, [userInfo]);

  const getUserInfo = e => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const inValidIconOn = () => {
    if (
      (email.length >= 5 && email.includes("@")) ||
      password.length >= 6 ||
      name.length >= 2
    ) {
      setIsValidEmail(true);
      setIsUnValidEmail(false);
    } else if (
      (email.indexOf("@") < 1 && email.length >= 1) ||
      password.length >= 1 ||
      (name.length && name.length < 2)
    ) {
      setIsUnValidEmail(true);
      setIsValidEmail(false);
    } else {
      setIsValidEmail(false);
      setIsUnValidEmail(false);
    }
  };

  const UnValidIcon = () => {
    return (
      <>
        {/* <i className="fa-solid fa-circle-xmark deleteBtn" /> */}
        <i className="fa-solid fa-circle-exclamation warningBtn " />
        <p className="unValidMessage">
          {email.length >= 1
            ? `정확하지 않은 이메일입니다.`
            : password.length >= 1
            ? `비밀번호는 최소 6자리 이상이어야 합니다.`
            : name.length >= 1
            ? `정확하지 않은 이름입니다.`
            : null}
        </p>
      </>
    );
  };

  const ValidIcon = () => {
    return (
      <>
        {/* <i className="fa-solid fa-circle-xmark deleteBtn" /> */}
        <i className="fa-regular fa-lg fa-circle-check checkBtn" />
      </>
    );
  };

  return (
    <div className="loginFormInput">
      <input
        className={isUnValidEmail ? unValidClass : null}
        type={type}
        name={type}
        placeholder={text}
        onChange={getUserInfo}
        onKeyUp={inValidIconOn}
      />
      {isUnValidEmail ? <UnValidIcon /> : null}
      {isValidEmail ? <ValidIcon /> : null}
    </div>
  );
}
