import React from "react";
import "./Nav.scss";

const LoginModal = () => {
  return (
    <div className="loginModalContainer">
      <div className="loginModal">
        <div className="loginBox">
          <header>
            <Logo />
          </header>
          <h2>로그인</h2>
          <section>
            <div className="loginContainer">
              <form className="loginForm">
                <div className="loginFormInput">
                  <input type="email" name="email" placeholder="이메일" />
                </div>
                <div className="loginFormInput">
                  <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                  />
                </div>
                <button className="loginBtn" type="submit">
                  로그인
                </button>
              </form>
              <div className="findPasswordBox">
                <button className="findPasswordBtn">
                  비밀번호를 잊어버리셨나요?
                </button>
              </div>
              <div className="signInBox">
                계정이 없으신가요?{" "}
                <button className="signInBtn">회원가입</button>
              </div>
              <hr className="orLine" />
              <ul className="snsContainer">
                <li className="snsList">
                  <button className="kakaoBtn">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMDM5NCAxOC4zQzE3LjAzMTggMTguMyAyMS4wNzg5IDE1LjA5ODggMjEuMDc4OSAxMS4xNUMyMS4wNzg5IDcuMjAxMTYgMTcuMDMxOCA0IDEyLjAzOTQgNEM3LjA0NzA5IDQgMyA3LjIwMTE2IDMgMTEuMTVDMyAxMy43MjQ5IDQuNzIwNzUgMTUuOTgxOSA3LjMwMjI5IDE3LjI0MDdDNy4wMzYwNyAxOC4zNTU0IDYuNTY4NTUgMjAuMzE5OCA2LjU1MTQ3IDIwLjQzODVDNi41Mjc1NCAyMC42MDQ4IDYuNzE5MjUgMjAuNzQwNiA2Ljg4NzU4IDIwLjYyNTFDNy4wMTA1IDIwLjU0MDggOS4yNTI5NSAxOS4wMTAyIDEwLjQ1NDEgMTguMTkwNEMxMC45Njg4IDE4LjI2MjQgMTEuNDk4NiAxOC4zIDEyLjAzOTQgMTguM1oiIGZpbGw9IiMzQzFFMUUiLz4KPC9zdmc+Cg==" />
                  </button>
                </li>
                <li className="snsList">
                  <button className="googleBtn">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNjQgMTIuMjA0MkMyMC42NCAxMS41NjYgMjAuNTgyNyAxMC45NTI0IDIwLjQ3NjQgMTAuMzYzM0gxMlYxMy44NDQ2SDE2Ljg0MzZDMTYuNjM1IDE0Ljk2OTYgMTYuMDAwOSAxNS45MjI4IDE1LjA0NzcgMTYuNTYxVjE4LjgxOTJIMTcuOTU2NEMxOS42NTgyIDE3LjI1MjQgMjAuNjQgMTQuOTQ1MSAyMC42NCAxMi4yMDQyVjEyLjIwNDJaIiBmaWxsPSIjNDI4NUY0Ii8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjk5OTggMjFDMTQuNDI5OCAyMSAxNi40NjcgMjAuMTk0MSAxNy45NTYxIDE4LjgxOTVMMTUuMDQ3NSAxNi41NjEzQzE0LjI0MTYgMTcuMTAxMyAxMy4yMTA3IDE3LjQyMDQgMTEuOTk5OCAxNy40MjA0QzkuNjU1NjcgMTcuNDIwNCA3LjY3MTU4IDE1LjgzNzIgNi45NjM4NSAxMy43MUgzLjk1NzAzVjE2LjA0MThDNS40Mzc5NCAxOC45ODMxIDguNDgxNTggMjEgMTEuOTk5OCAyMVYyMVoiIGZpbGw9IiMzNEE4NTMiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi45NjQwOSAxMy43MDk4QzYuNzg0MDkgMTMuMTY5OCA2LjY4MTgyIDEyLjU5MyA2LjY4MTgyIDExLjk5OThDNi42ODE4MiAxMS40MDY2IDYuNzg0MDkgMTAuODI5OCA2Ljk2NDA5IDEwLjI4OThWNy45NTgwMUgzLjk1NzI3QzMuMzQ3NzMgOS4xNzMwMSAzIDEwLjU0NzYgMyAxMS45OTk4QzMgMTMuNDUyMSAzLjM0NzczIDE0LjgyNjYgMy45NTcyNyAxNi4wNDE2TDYuOTY0MDkgMTMuNzA5OFYxMy43MDk4WiIgZmlsbD0iI0ZCQkMwNSIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4wNDI3IDYuNTc5NTVDMTMuMzY0MSA2LjU3OTU1IDE0LjU1MDUgNy4wMzM2NCAxNS40ODMyIDcuOTI1NDVMMTguMDY0NSA1LjM0NDA5QzE2LjUwNTkgMy44OTE4MiAxNC40Njg2IDMgMTIuMDQyNyAzQzguNTI0NTUgMyA1LjQ4MDkxIDUuMDE2ODIgNCA3Ljk1ODE4TDcuMDA2ODIgMTAuMjlDNy43MTQ1NSA4LjE2MjczIDkuNjk4NjQgNi41Nzk1NSAxMi4wNDI3IDYuNTc5NTVWNi41Nzk1NVoiIGZpbGw9IiNFQTQzMzUiLz4KPC9zdmc+Cg==" />
                  </button>
                </li>
                <li className="snsList">
                  <button className="twiterBtn">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC40NzUzNSAxOS43QzE1LjY0NTUgMTkuNyAxOS41NjY1IDEzLjg1MjcgMTkuNTY2NSA4Ljc4MjM1QzE5LjU2NjUgOC42MTYxOSAxOS41NjMxIDguNDUwNzggMTkuNTU1MyA4LjI4NjI3QzIwLjMxNjQgNy43NDQ3MSAyMC45NzggNy4wNjg5NCAyMS41IDYuMjk5NTFDMjAuODAxNSA2LjYwNDg5IDIwLjA0OTggNi44MTA3NyAxOS4yNjEzIDYuOTAzNTRDMjAuMDY2MiA2LjQyODYzIDIwLjY4NDEgNS42NzY5MyAyMC45NzU0IDQuNzgwOTlDMjAuMjIyMSA1LjIyMDUxIDE5LjM4ODIgNS41NDAxOCAxOC41MDAzIDUuNzEyMzJDMTcuNzg5IDQuOTY2NTIgMTYuNzc1OSA0LjUgMTUuNjU0OSA0LjVDMTMuNTAyIDQuNSAxMS43NTYyIDYuMjE4NDkgMTEuNzU2MiA4LjMzNjkyQzExLjc1NjIgOC42MzgxMSAxMS43OTA1IDguOTMwODUgMTEuODU3MyA5LjIxMTg0QzguNjE3NjIgOS4wNTE1MiA1Ljc0NDgyIDcuNTI0NTQgMy44MjI0IDUuMjAyNzhDMy40ODczMiA1Ljc2OTcgMy4yOTQ1IDYuNDI4NjMgMy4yOTQ1IDcuMTMxMzRDMy4yOTQ1IDguNDYyNjggMy45ODI2OCA5LjYzNzg5IDUuMDI5MTMgMTAuMzI1NEM0LjM4OTgyIDEwLjMwNiAzLjc4OTA0IDEwLjEzMzEgMy4yNjM2NSA5Ljg0NTM0QzMuMjYyNzQgOS44NjEzNSAzLjI2Mjc0IDkuODc3NDMgMy4yNjI3NCA5Ljg5NDI3QzMuMjYyNzQgMTEuNzUyOSA0LjYwNjY0IDEzLjMwNDMgNi4zOTAxNCAxMy42NTYxQzYuMDYyOCAxMy43NDM4IDUuNzE4MjIgMTMuNzkxMSA1LjM2MjU0IDEzLjc5MTFDNS4xMTE0NCAxMy43OTExIDQuODY3MTcgMTMuNzY2NiA0LjYyOTc1IDEzLjcyMTlDNS4xMjYwMyAxNS4yNDY0IDYuNTY1MDEgMTYuMzU1OCA4LjI3MTM2IDE2LjM4NzFDNi45MzY5NiAxNy40MTYyIDUuMjU2MjkgMTguMDI5NSAzLjQyOTk0IDE4LjAyOTVDMy4xMTUzNyAxOC4wMjk1IDIuODA1MTQgMTguMDExOSAyLjUgMTcuOTc2NEM0LjIyNTI4IDE5LjA2NDcgNi4yNzM2MyAxOS43IDguNDc1MzUgMTkuNyIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" />
                  </button>
                </li>
              </ul>
              <div className="tip">
                TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을
                사용해요.
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <span className="logo">
      <span className="watchaPointColor">WATCHA</span> CLASSIC
    </span>
  );
};

const Nav = () => {
  return (
    <nav className="nav">
      <div className="navBox">
        <ul className="navList">
          <li className="logoBtn">
            <a>
              <Logo />
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
              <i class="fa-solid fa-magnifying-glass" />
            </form>
          </li>
          <li className="loginBtn">
            <button>로그인</button>
          </li>
          <li className="signInBtn">
            <button>회원가입</button>
          </li>
        </ul>
      </div>
      <LoginModal />
    </nav>
  );
};

export default Nav;
