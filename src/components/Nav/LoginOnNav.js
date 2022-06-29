import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";

const LoginOnNav = () => {
  const navigate = useNavigate();

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
            navigate("/profile");
          }}
        />
      </li>
    </>
  );
};

export default LoginOnNav;
