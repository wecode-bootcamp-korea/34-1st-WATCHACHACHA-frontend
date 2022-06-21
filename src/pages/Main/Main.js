import React from "react";
// import { Link } from "react-router-dom";
import "./Main.scss";
import FirstLow from "./components/FirstLow/FirstLow";

const Main = () => {
  return (
    <>
      <div>
        <h1 className="fakeNav">안녕하세요</h1>
      </div>
      <div className="mainWrapper">
        <div className="mainBox1">
          <p className="filmTheme1">1970's Films</p>
          <ul className="filmList">
            <FirstLow />
            <FirstLow />
            <FirstLow />
            <FirstLow />
            <FirstLow />
            <FirstLow />
            <FirstLow />
            <FirstLow />
            <FirstLow />
            <FirstLow />
          </ul>
          <div className="preBtn">
            <i class="fa-solid fa-chevron-left" />
          </div>
          <div className="nextBtn">
            <i class="fa-solid fa-chevron-right" />
          </div>
        </div>
        <div className="mainBox2">
          <div className="mainText2">1960's Films</div>
        </div>
        <div className="mainBox3">
          <div className="mainText3">1950's Films</div>
        </div>
      </div>
    </>
  );
};

export default Main;
