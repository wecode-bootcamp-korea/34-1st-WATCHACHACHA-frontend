import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLayout from "./FormLayout";
import Input from "./Input";
import "./Modal.scss";

export default function Form({
  type,
  title,
  inputData,
  handleModal,
  handleProfileNav,
}) {
  const navigate = useNavigate();
  const [loginUserInfo, setLoginUserInfo] = useState({
    email: "",
    password: "",
  });

  const [signupUserInfo, setSignupUserInfo] = useState({
    signName: "",
    signEmail: "",
    signPassword: "",
    signBirth: "",
  });

  const { email, password } = loginUserInfo;
  const { signName, signEmail, signPassword, signBirth } = signupUserInfo;

  const LOGIN_ERROR_MESSAGE = {
    INVALID_USER: "이메일이나 비밀번호를 확인 해 주세요",
  };

  const SIGN_ERROR_MESSAGE = {
    EMAIL_ALREADY_EXISTS: "이미 가입된 이메일 입니다.",
    INVALID_PASSWORD: "비밀번호를 확인 해 주세요",
    INVALID_USERNAME: "이름을 확인 해 주세요",
    INVALID_EMAIL: "이메일을 확인 해 주세요",
    INVALID_BIRTH: "생년월일을 확인 해 주세요",
  };

  const getUserInfo = e => {
    const { value, name } = e.target;

    if (type === "login") {
      setLoginUserInfo({ ...loginUserInfo, [name]: value });
    } else {
      setSignupUserInfo({ ...signupUserInfo, [name]: value });
    }
  };

  const onTargetReset = (type, status) => {
    if (status === "login") {
      console.log(type);
      setLoginUserInfo({ ...loginUserInfo, [type]: "" });
    }
    if (status === "signup") {
      setSignupUserInfo({ ...signupUserInfo, [type]: "" });
    }
  };

  const onReset = () => {
    setLoginUserInfo({
      email: "",
      password: "",
    });
    setSignupUserInfo({
      signName: "",
      signEmail: "",
      signPassword: "",
      signBirth: "",
    });
  };

  useEffect(() => {
    if (signBirth.length === 8) {
      let copy = { ...signupUserInfo };
      const num = copy.signBirth.toString();
      const result =
        num.substr(0, 4) + "-" + num.substr(4, 2) + "-" + num.substr(6);
      copy.signBirth = result;
      setSignupUserInfo(copy);
    }
  }, [signBirth]);

  const loginService = e => {
    e.preventDefault();
    fetch("http://10.58.2.194:8000/users/signin", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.access_token) {
          localStorage.setItem("token", result.access_token);
          handleModal("");
          handleProfileNav("loginSuccess");
          navigate("/");
        } else {
          alert(LOGIN_ERROR_MESSAGE[result.message]);
        }
      })
      .catch(error => console.log(error));
  };

  const signupService = e => {
    e.preventDefault();
    fetch("http://10.58.2.194:8000/users/signup", {
      method: "POST",
      body: JSON.stringify({
        username: signName,
        email: signEmail,
        password: signPassword,
        date_of_birth: signBirth,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === "SUCCESS") {
          alert("회원가입 성공");
          handleModal("");
          handleProfileNav("loginSuccess");
          navigate("/");
        } else {
          alert(SIGN_ERROR_MESSAGE[result.message]);
        }
      });
  };

  const validator = {
    email: input => {
      const regExp =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
      return regExp.test(input);
    },
    password: input => input.length >= 6,
    signName: input => input.length >= 2,
    signEmail: input => {
      const regExp =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
      return regExp.test(input);
    },
    signPassword: input => {
      const regExp =
        /^((?=.*[A-Za-z])(?=.*\d)|(?=.*[A-Za-z])(?=.*[\^@$!%*#?&])|(?=.*\d)(?=.*[\^@$!%*#?&])).{10,}$/;
      return regExp.test(input);
    },
    signBirth: input => {
      const regExp =
        /^(19[0-9][0-9]|20[0-9][0-9])*-(0[1-9]|1[0-2])*-(0[1-9]|[1-2][0-9]|3[0-1])$/;
      return regExp.test(input);
    },
  };

  return (
    <FormLayout>
      <h2>{title}</h2>
      <section>
        <div className="loginContainer">
          <form className="loginForm">
            {inputData.map((input, idx) => (
              <Input
                key={idx}
                status={type}
                type={input.type}
                text={input.text}
                value={
                  type === "login"
                    ? loginUserInfo[input.type]
                    : signupUserInfo[input.type]
                }
                unValidClass={input.unValidClass}
                errorMessage={input.errorMessage}
                getUserInfo={getUserInfo}
                handleValid={validator[input.type]}
                onReset={onReset}
                onTargetReset={onTargetReset}
              />
            ))}
            {type === "signup" && (
              <button className="languageBtn">
                <i className="fa-solid fa-lg fa-globe global" />
                <span className="languageSelect">한국어(대한민국)</span>
                <i className="fa-solid fa-caret-down downBtn" />
              </button>
            )}
            <button
              className="loginBtn"
              type="submit"
              value={title}
              onClick={type === "login" ? loginService : signupService}
            >
              {title}
            </button>
          </form>
          {type === "login" ? (
            <>
              <div className="findPasswordBox">
                <button className="findPasswordBtn">
                  비밀번호를 잊어버리셨나요?
                </button>
              </div>
              <div className="signInBox">
                계정이 없으신가요?
                <button
                  className="signInBtn"
                  onClick={e => {
                    e.preventDefault();
                    handleModal("signup");
                  }}
                >
                  회원가입
                </button>
              </div>
            </>
          ) : (
            <div className="signInBox alreadySignInContent">
              이미 가입하셨나요?
              <button
                className="signInBtn"
                onClick={e => {
                  e.preventDefault();
                  handleModal("login");
                }}
              >
                로그인
              </button>
            </div>
          )}
          <hr className="orLine" />
          <ul className="snsContainer">
            <li className="snsList">
              <button className="kakaoBtn">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMDM5NCAxOC4zQzE3LjAzMTggMTguMyAyMS4wNzg5IDE1LjA5ODggMjEuMDc4OSAxMS4xNUMyMS4wNzg5IDcuMjAxMTYgMTcuMDMxOCA0IDEyLjAzOTQgNEM3LjA0NzA5IDQgMyA3LjIwMTE2IDMgMTEuMTVDMyAxMy43MjQ5IDQuNzIwNzUgMTUuOTgxOSA3LjMwMjI5IDE3LjI0MDdDNy4wMzYwNyAxOC4zNTU0IDYuNTY4NTUgMjAuMzE5OCA2LjU1MTQ3IDIwLjQzODVDNi41Mjc1NCAyMC42MDQ4IDYuNzE5MjUgMjAuNzQwNiA2Ljg4NzU4IDIwLjYyNTFDNy4wMTA1IDIwLjU0MDggOS4yNTI5NSAxOS4wMTAyIDEwLjQ1NDEgMTguMTkwNEMxMC45Njg4IDE4LjI2MjQgMTEuNDk4NiAxOC4zIDEyLjAzOTQgMTguM1oiIGZpbGw9IiMzQzFFMUUiLz4KPC9zdmc+Cg=="
                  alt="kakaoimg"
                />
              </button>
            </li>
            <li className="snsList">
              <button className="googleBtn">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNjQgMTIuMjA0MkMyMC42NCAxMS41NjYgMjAuNTgyNyAxMC45NTI0IDIwLjQ3NjQgMTAuMzYzM0gxMlYxMy44NDQ2SDE2Ljg0MzZDMTYuNjM1IDE0Ljk2OTYgMTYuMDAwOSAxNS45MjI4IDE1LjA0NzcgMTYuNTYxVjE4LjgxOTJIMTcuOTU2NEMxOS42NTgyIDE3LjI1MjQgMjAuNjQgMTQuOTQ1MSAyMC42NCAxMi4yMDQyVjEyLjIwNDJaIiBmaWxsPSIjNDI4NUY0Ii8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjk5OTggMjFDMTQuNDI5OCAyMSAxNi40NjcgMjAuMTk0MSAxNy45NTYxIDE4LjgxOTVMMTUuMDQ3NSAxNi41NjEzQzE0LjI0MTYgMTcuMTAxMyAxMy4yMTA3IDE3LjQyMDQgMTEuOTk5OCAxNy40MjA0QzkuNjU1NjcgMTcuNDIwNCA3LjY3MTU4IDE1LjgzNzIgNi45NjM4NSAxMy43MUgzLjk1NzAzVjE2LjA0MThDNS40Mzc5NCAxOC45ODMxIDguNDgxNTggMjEgMTEuOTk5OCAyMVYyMVoiIGZpbGw9IiMzNEE4NTMiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi45NjQwOSAxMy43MDk4QzYuNzg0MDkgMTMuMTY5OCA2LjY4MTgyIDEyLjU5MyA2LjY4MTgyIDExLjk5OThDNi42ODE4MiAxMS40MDY2IDYuNzg0MDkgMTAuODI5OCA2Ljk2NDA5IDEwLjI4OThWNy45NTgwMUgzLjk1NzI3QzMuMzQ3NzMgOS4xNzMwMSAzIDEwLjU0NzYgMyAxMS45OTk4QzMgMTMuNDUyMSAzLjM0NzczIDE0LjgyNjYgMy45NTcyNyAxNi4wNDE2TDYuOTY0MDkgMTMuNzA5OFYxMy43MDk4WiIgZmlsbD0iI0ZCQkMwNSIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4wNDI3IDYuNTc5NTVDMTMuMzY0MSA2LjU3OTU1IDE0LjU1MDUgNy4wMzM2NCAxNS40ODMyIDcuOTI1NDVMMTguMDY0NSA1LjM0NDA5QzE2LjUwNTkgMy44OTE4MiAxNC40Njg2IDMgMTIuMDQyNyAzQzguNTI0NTUgMyA1LjQ4MDkxIDUuMDE2ODIgNCA3Ljk1ODE4TDcuMDA2ODIgMTAuMjlDNy43MTQ1NSA4LjE2MjczIDkuNjk4NjQgNi41Nzk1NSAxMi4wNDI3IDYuNTc5NTVWNi41Nzk1NVoiIGZpbGw9IiNFQTQzMzUiLz4KPC9zdmc+Cg=="
                  alt="googleimg"
                />
              </button>
            </li>
            <li className="snsList">
              <button className="twiterBtn">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC40NzUzNSAxOS43QzE1LjY0NTUgMTkuNyAxOS41NjY1IDEzLjg1MjcgMTkuNTY2NSA4Ljc4MjM1QzE5LjU2NjUgOC42MTYxOSAxOS41NjMxIDguNDUwNzggMTkuNTU1MyA4LjI4NjI3QzIwLjMxNjQgNy43NDQ3MSAyMC45NzggNy4wNjg5NCAyMS41IDYuMjk5NTFDMjAuODAxNSA2LjYwNDg5IDIwLjA0OTggNi44MTA3NyAxOS4yNjEzIDYuOTAzNTRDMjAuMDY2MiA2LjQyODYzIDIwLjY4NDEgNS42NzY5MyAyMC45NzU0IDQuNzgwOTlDMjAuMjIyMSA1LjIyMDUxIDE5LjM4ODIgNS41NDAxOCAxOC41MDAzIDUuNzEyMzJDMTcuNzg5IDQuOTY2NTIgMTYuNzc1OSA0LjUgMTUuNjU0OSA0LjVDMTMuNTAyIDQuNSAxMS43NTYyIDYuMjE4NDkgMTEuNzU2MiA4LjMzNjkyQzExLjc1NjIgOC42MzgxMSAxMS43OTA1IDguOTMwODUgMTEuODU3MyA5LjIxMTg0QzguNjE3NjIgOS4wNTE1MiA1Ljc0NDgyIDcuNTI0NTQgMy44MjI0IDUuMjAyNzhDMy40ODczMiA1Ljc2OTcgMy4yOTQ1IDYuNDI4NjMgMy4yOTQ1IDcuMTMxMzRDMy4yOTQ1IDguNDYyNjggMy45ODI2OCA5LjYzNzg5IDUuMDI5MTMgMTAuMzI1NEM0LjM4OTgyIDEwLjMwNiAzLjc4OTA0IDEwLjEzMzEgMy4yNjM2NSA5Ljg0NTM0QzMuMjYyNzQgOS44NjEzNSAzLjI2Mjc0IDkuODc3NDMgMy4yNjI3NCA5Ljg5NDI3QzMuMjYyNzQgMTEuNzUyOSA0LjYwNjY0IDEzLjMwNDMgNi4zOTAxNCAxMy42NTYxQzYuMDYyOCAxMy43NDM4IDUuNzE4MjIgMTMuNzkxMSA1LjM2MjU0IDEzLjc5MTFDNS4xMTE0NCAxMy43OTExIDQuODY3MTcgMTMuNzY2NiA0LjYyOTc1IDEzLjcyMTlDNS4xMjYwMyAxNS4yNDY0IDYuNTY1MDEgMTYuMzU1OCA4LjI3MTM2IDE2LjM4NzFDNi45MzY5NiAxNy40MTYyIDUuMjU2MjkgMTguMDI5NSAzLjQyOTk0IDE4LjAyOTVDMy4xMTUzNyAxOC4wMjk1IDIuODA1MTQgMTguMDExOSAyLjUgMTcuOTc2NEM0LjIyNTI4IDE5LjA2NDcgNi4yNzM2MyAxOS43IDguNDc1MzUgMTkuNyIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                  alt="twitimg"
                />
              </button>
            </li>
          </ul>
          {type === "login" && (
            <div className="tip">
              TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을
              사용해요.
            </div>
          )}
        </div>
      </section>
    </FormLayout>
  );
}
