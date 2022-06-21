import React from "react";
import "./RatingStar.scss";

const RatingStar = () => {
  return (
    <div className="ratingStar">
      <p className="rating">평가하기</p>
      <img src="/images/icon/star.png" alt="ratingStar" />
    </div>
  );
};

export default RatingStar;
