import React from "react";
import "./Description.scss";

const Description = () => {
  return (
    <section className="description">
      <article className="basicInfo">
        <div class="basicInfoWrapper">
          <h1 className="basicInfoTitle">기본 정보</h1>
          <div className="basicInfoIcon">더보기</div>
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
      <article className="filmCrew">
        <h1 className="filmCrewTitle">출연/제작</h1>
        <ul className="filmCrewList">
          <li className="filmCrewListItem">
            <div className="imageWrapper">
              <img
                className="directorImage"
                src="/images/icon/star.png"
                alt="personImage"
              />
            </div>
            <div className="filmCrewWrapper">
              <p className="directorName">박훈정</p>
              <p className="directorPosition">감독</p>
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Description;
