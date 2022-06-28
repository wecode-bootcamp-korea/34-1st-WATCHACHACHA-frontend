import React from "react";
import "./BasicInfo.scss";

const BasicInfo = () => {
  const data = null;
  return (
    <div className="basicInfo">
      <div className="basicInfoWrapper">
        <h2 className="basicInfoTitle">기본 정보</h2>
        <button className="basicInfoMore">더보기</button>
      </div>
      <div className="simplyInfo">
        <p className="filmTitle">{data}</p>
        <p className="filmCategory">
          <span className="categoryRelease">{data}</span>
          <span className="categoryDot">·</span>
          <span className="categoryCountries">{data}</span>
          <span className="categoryDot">·</span>
          <span className="categoryGenres">{data}</span>
        </p>
        <p className="showingTime">{data}</p>
      </div>
      <p className="filmDescription">{data}</p>
    </div>
  );
};

export default BasicInfo;
