import React from "react";
import { useState, useEffect } from "react";
import "./Profile.scss";

import ProfileSetting from "./ProfileSetting";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://10.58.2.194:8000/users", {
      method: "GET",
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then(res => res.json())
      .then(data => {
        setUserInfo(data);
      })
      .then(() => setIsLoading(false));
  }, []);

  if (isLoading) return;

  return (
    <section className="profileBackground">
      <div className="profileContainer">
        <div className="profileContain">
          <div className="profileBox">
            <div className="profileTop">
              <i className="fa-solid fa-lg fa-gear" />
            </div>
            <div className="profileBottom">
              <div className="profileUser">
                <header className="profileUserHeader">
                  <div className="profileUserIconBox">
                    <div className="profileUserIcon">
                      <i className="fa-regular fa-lg fa-user" />
                    </div>
                  </div>
                  <div className="profileUserBox">
                    <h1 className="profileUserName">
                      {userInfo.results.username}
                    </h1>
                    <div className="profileUserContent">
                      <div>프로필이 없습니다.</div>
                    </div>
                  </div>
                </header>
                <ul className="profileUserUl">
                  <li>
                    <a>
                      <span
                        className="graph"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNFRjY5MkUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEuMTggMTEuOTZoMy43NHY4LjM2SDEuMTh6TTE1Ljc1IDE2LjgzaDMuNzR2My40OWgtMy43NHpNNi4wNCA5LjEyaDMuNzR2MTEuMkg2LjA0ek0xMC45IDEzLjg0aDMuNzR2Ni40OEgxMC45eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkNBMjIiIGQ9Ik0xNy40NCAxLjM3bDEuNjYgNCA0LjMxLjM0LTMuMjggMi44MSAxIDQuMjEtMy42OS0yLjI2LTMuNjkgMi4yNiAxLjAxLTQuMjEtMy4yOS0yLjgxIDQuMzItLjM0eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                      />
                      <span className="graphText">취향분석</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="profileLike">
                <a>
                  <ul>
                    <li className="title">영화</li>
                    <li className="star">
                      ★{userInfo.results.watchlist_count}
                    </li>
                    <li className="watch">
                      보고싶어요
                      <strong>8</strong>
                    </li>
                  </ul>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Profile;
