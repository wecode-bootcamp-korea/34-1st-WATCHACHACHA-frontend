import React from "react";
import "./BasicInfo.scss";

const BasicInfo = ({
  filmData,
  filmData: {
    results: {
      name,
      release_date,
      running_time_min,
      descriptions,
      genre,
      countries,
    },
  },
}) => {
  if (filmData === undefined) return;
  return (
    <div className="basicInfo">
      <div className="basicInfoWrapper">
        <h2 className="basicInfoTitle">기본 정보</h2>
        <button className="basicInfoMore">더보기</button>
      </div>
      <div className="simplyInfo">
        <p className="filmTitle">{name}</p>
        <p className="filmCategory">
          <span className="categoryRelease">{release_date}</span>
          <span className="categoryDot">·</span>
          <span className="categoryCountries">{countries}</span>
          <span className="categoryDot">·</span>
          <span className="categoryGenres">{genre[0]}</span>
          <span
            style={genre[1] ? { display: "inline" } : { display: "none" }}
            className="categoryGenres"
          >
            {genre[1]}
          </span>
        </p>
        <p className="showingTime">{`${running_time_min} 분`}</p>
      </div>
      <p className="filmDescription">{descriptions}</p>
    </div>
  );
};

export default BasicInfo;
