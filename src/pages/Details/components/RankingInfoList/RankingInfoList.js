import React from "react";
import "./RankingInfoList.scss";

const RankingInfoList = () => {
  return (
    <ul className="rankingInfoList">
      <li>
        예매 순위
        <em> 2위 &#40;12%&#41;</em>
      </li>
      <li>
        개봉
        <em> 7일째</em>
      </li>
      <li>
        누적 관객
        <em> 158만명</em>
      </li>
    </ul>
  );
};

export default RankingInfoList;
