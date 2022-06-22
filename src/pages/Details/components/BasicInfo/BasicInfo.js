import React from "react";
import "./BasicInfo.scss";

const BasicInfo = () => {
  return (
    <article className="basicInfo">
      <div class="basicInfoWrapper">
        <h2 className="basicInfoTitle">기본 정보</h2>
        <button className="basicInfoMore">더보기</button>
      </div>
      <div className="simplyInfo">
        <p className="filmTitle">마녀(魔女) Part2. The Other One</p>
        <p className="filmCategory">2021 · 한국 · 액션</p>
        <p className="showingTime">2시간 17분 · 15세</p>
      </div>
      <p className="filmDescription">
        통제불능의 존재가 세상 밖으로 나왔다! `자윤`이 사라진 뒤, 정체불명의
        집단의 무차별 습격으로 마녀 프로젝트가 진행되고 있는 `아크`가
        초토화된다. 그곳에서 홀로 살아남은 `소녀`는 생애 처음 세상 밖으로 발을
        내딛고 우연히 만난 `경희`의 도움으로 ...
      </p>
    </article>
  );
};

export default BasicInfo;
