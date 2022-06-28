import React from "react";
import LoginModal from "./Modal/LoginModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "./data";
import LogoutNav from "./LogoutNav";
import LoginOnNav from "./LoginOnNav";
import "./Nav.scss";

const Nav = () => {
  const [modalStatus, setModalStatus] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [inputData, setInputData] = useState(data);

  const [{ LOGIN_DATA, SIGNUP_DATA }] = inputData;

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
            <span className="logo">
              <span className="watchaPointColor">WATCHA</span> CLASSIC
            </span>
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
            <LoginOnNav />
          ) : (
            <LogoutNav handleModal={handleModal} />
          )}
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

export default Nav;
