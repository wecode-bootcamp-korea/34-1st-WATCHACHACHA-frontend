import React from "react";
import "./BasicInfo.scss";

const BasicInfo = () => {
  return (
    <div className="basicInfo">
      <div className="basicInfoWrapper">
        <h2 className="basicInfoTitle">기본 정보</h2>
        <button className="basicInfoMore">더보기</button>
      </div>
      <div className="simplyInfo">
        <p className="filmTitle">터미네이터</p>
        <p className="filmCategory">
          <span className="categoryRelease">1984</span>
          <span className="categoryDot">·</span>
          <span className="categoryCountries">영국/미국</span>
          <span className="categoryDot">·</span>
          <span className="categoryGenres">액션/SF</span>
        </p>
        <p className="showingTime">1시간 48분</p>
      </div>
      <p className="filmDescription">
        1997년, 인간이 만든 인공지능 컴퓨터 전략 방어 네트워크가 스스로의 지능을
        갖추고는 인류를 핵전쟁의 참화를 일으켜 30억이라는 인류를 잿더미 속에
        묻어버린다. 그리고 남은 인간들은 기계의 지배를 받아 시체를 처리하는 일
        등에 동원된다. 이때 비상한 지...
      </p>
    </div>
  );
};

export default BasicInfo;
