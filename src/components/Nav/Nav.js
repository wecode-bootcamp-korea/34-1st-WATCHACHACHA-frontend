import React from "react";
import "./Nav.scss";
import LoginModal from "./Modal/LoginModal";
import SignUpModal from "./Modal/SignUpModal";
import { useState } from "react";

const Nav = () => {
  const [loginModalOn, setLoginModalOn] = useState(false);
  const [signInModalOn, setSignInModalOn] = useState(false);
  const [modalBackgroundOn, setModalBackgroundOn] = useState(false);

  const enterLoginModalOn = () => {
    setLoginModalOn(true);
    setModalBackgroundOn(true);
  };

  const enterSignInModalOn = () => {
    setSignInModalOn(true);
    setModalBackgroundOn(true);
  };

  const outModalOn = () => {
    setLoginModalOn(false);
    setSignInModalOn(false);
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
      {loginModalOn ? <LoginModal /> : null}
      {signInModalOn ? <SignUpModal /> : null}
    </nav>
  );
};

export default Nav;
