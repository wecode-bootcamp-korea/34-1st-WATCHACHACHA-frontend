import React from "react";
import LoginModal from "./Modal/LoginModal";
import { useState } from "react";
import "./Nav.scss";

const ModalOnBtn = ({ handleModal }) => {
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

const ProfileNav = () => {
  return (
    <>
      <li className="evaluationBtn">
        <a>평가하기</a>
      </li>
      <li className="profileIcon">
        <a>
          <i className="fa-regular fa-lg fa-user" />
        </a>
      </li>
    </>
  );
};

const Nav = () => {
  const [modalStatus, setModalStatus] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleModal = status => {
    setModalStatus(status);
  };

  const handleProfileNav = status => {
    setLoginStatus(status);
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
          {loginStatus === "loginSuccess" ? (
            <ProfileNav />
          ) : (
            <ModalOnBtn handleModal={handleModal} />
          )}
          {/* <ModalOnBtn handleModal={handleModal} /> */}

          {/* <li className="loginBtn">
            <button onClick={() => handleModal("login")}>로그인</button>
          </li>
          <li className="signInBtn">
            <button onClick={() => handleModal("signup")}>회원가입</button>
          </li> */}
        </ul>
      </div>
      <div
        className={modalStatus ? "modalBackground" : null}
        onClick={() => handleModal("")}
      />
      {modalStatus && (
        <LoginModal
          type={modalStatus}
          title={modalStatus === "login" ? "로그인" : "회원가입"}
          inputData={modalStatus === "login" ? LOGIN_DATA : SIGNUP_DATA}
          handleModal={handleModal}
          handleProfileNav={handleProfileNav}
        />
      )}
    </nav>
  );
};

const LOGIN_DATA = [
  {
    type: "email",
    text: "이메일",
    unValidClass: "unValidClass",
    errorMessage: "정확하지 않은 이메일 입니다.",
  },
  {
    type: "password",
    text: "비밀번호",
    unValidClass: "unValidClass",
    errorMessage: "비밀번호는 최소 6자리 이상이어야 합니다.",
  },
];

const SIGNUP_DATA = [
  {
    type: "signName",
    text: "이름",
    unValidClass: "unValidClass",
    errorMessage: "정확하지 않은 이름입니다.",
  },
  {
    type: "signEmail",
    text: "이메일",
    unValidClass: "unValidClass",
    errorMessage: "정확하지 않은 이메일입니다.",
  },
  {
    type: "signPassword",
    text: "비밀번호",
    unValidClass: "unValidClass",
    errorMessage:
      "비밀번호는 영문, 숫자, 특수문자 중 2개 이상을 조합하여 최소 10자리 이상이여야 합니다.",
  },
  {
    type: "signBirth",
    text: "생년월일",
    unValidClass: "unValidClass",
    errorMessage: "정확하지 않은 생년월일입니다.",
  },
];

export default Nav;
