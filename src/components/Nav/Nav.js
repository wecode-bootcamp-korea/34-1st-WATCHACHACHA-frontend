import React from "react";
import LoginModal from "./Modal/LoginModal";
import { useState } from "react";
import "./Nav.scss";

const Nav = () => {
  const [loginModalOn, setLoginModalOn] = useState(false);
  const [signUpModalOn, setSignUpModalOn] = useState(false);
  const [modalBackgroundOn, setModalBackgroundOn] = useState(false);
  // const [testModal, setTestModal] = useState(); // "login", "signup", "" -> state 값이 "login" 일때 ~

  const enterLoginModalOn = () => {
    setLoginModalOn(true);
    setModalBackgroundOn(true);
  };

  const enterSignInModalOn = () => {
    setSignUpModalOn(true);
    setModalBackgroundOn(true);
  };

  const outModalOn = () => {
    setLoginModalOn(false);
    setSignUpModalOn(false);
    setModalBackgroundOn(false);
  };

  return (
    <nav className="nav">
      <div className="navBox">
        <ul className="navList">
          <li className="logoBtn">
            <a>
              <span className="logo">
                <span className="watchaPointColor">WATCHA</span> CLASSIC
              </span>
            </a>
          </li>
          <li className="movieBtn">
            <button>영화</button>
          </li>
          <li className="search">
            <form className="searchBox">
              <input
                type="text"
                placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
              />
              <i className="fa-solid fa-magnifying-glass" />
            </form>
          </li>
          <li className="loginBtn">
            <button onClick={enterLoginModalOn}>로그인</button>
          </li>
          <li className="signInBtn">
            <button onClick={enterSignInModalOn}>회원가입</button>
          </li>
        </ul>
      </div>
      <div
        className={modalBackgroundOn ? "modalBackground" : null}
        onClick={outModalOn}
      />
      {loginModalOn ? (
        <LoginModal
          type="login"
          title="로그인"
          inputData={LOGIN_DATA}
          loginModalOn={loginModalOn}
          signUpModalOn={signUpModalOn}
          setSignUpModalOn={setSignUpModalOn}
          setLoginModalOn={setLoginModalOn}
        />
      ) : null}
      {signUpModalOn ? (
        <LoginModal
          type="signup"
          title="회원가입"
          inputData={SIGNUP_DATA}
          loginModalOn={loginModalOn}
          signUpModalOn={signUpModalOn}
          setLoginModalOn={setLoginModalOn}
          setSignUpModalOn={setSignUpModalOn}
        />
      ) : null}
    </nav>
  );
};

const LOGIN_DATA = [
  {
    type: "email",
    text: "이메일",
    unValidClass: "unValidClass",
  },
  {
    type: "password",
    text: "비밀번호",
    unValidClass: "unValidClass",
  },
];

const SIGNUP_DATA = [
  {
    type: "name",
    text: "이름",
    unValidClass: "unValidClass",
  },
  {
    type: "email",
    text: "이메일",
    unValidClass: "unValidClass",
  },
  {
    type: "password",
    text: "비밀번호",
    unValidClass: "unValidClass",
  },
];

export default Nav;
