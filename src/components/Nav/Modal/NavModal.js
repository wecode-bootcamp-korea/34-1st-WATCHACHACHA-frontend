import React from "react";
import { useState } from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import "./../Nav.scss";

const NavModal = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="loginModalContainer">
      {isLogin ? (
        <LoginModal setIsLogin={setIsLogin} />
      ) : (
        <SignUpModal setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

const SIGNIN_DATA = [
  {
    type: "email",
    text: "이메일",
  },
  {
    type: "password",
    text: "비밀번호",
  },
];

const SIGNUP_DATA = [
  {
    type: "name",
    text: "이름",
  },
  {
    type: "email",
    text: "이메일",
  },
  {
    type: "password",
    text: "비밀번호",
  },
];

export default NavModal;
