import React from "react";
import "./BasicInfo.scss";

const BasicInfo = () => {
  return (
    <div className="basicInfo">
      <div class="basicInfoWrapper">
        <h1 className="basicInfoTitle">기본 정보</h1>
        <div className="basicInfoIcon">더보기</div>
      </div>
      <div className="simplyInfo">
        <p className="movieTitle">마녀(魔女) Part2. The Other One</p>
        <p className="movieCategory">2021 · 한국 · 액션</p>
        <p className="showingTime">2시간 17분 · 15세</p>
      </div>
      <p className="movieDescription">
        통제불능의 존재가 세상 밖으로 나왔다! `자윤`이 사라진 뒤, 정체불명의
        집단의 무차별 습격으로 마녀 프로젝트가 진행되고 있는 `아크`가
        초토화된다. 그곳에서 홀로 살아남은 `소녀`는 생애 처음 세상 밖으로 발을
        내딛고 우연히 만난 `경희`의 도움으로 ...
      </p>
    </div>
  );
};

export default BasicInfo;
