import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";

const LoginOnNav = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState();

  const getUserInfoData = e => {
    e.preventDefault();
    fetch("api주소")
      .then(response => response.json())
      .then(result => {
        if (result.access_token) {
          setUserInfo(result);
        }
      });
  };

  return (
    <>
      <li className="evaluationBtn">
        <span>평가하기</span>
      </li>
      <li className="profileIcon">
        <i
          className="fa-regular fa-lg fa-user"
          onClick={e => {
            e.preventDefault();
          }}
        />
      </li>
    </>
  );
};

export default LoginOnNav;
