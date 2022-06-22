import React from "react";
import "./StarScoreGraph.scss";

const StarScoreGraph = () => {
  return (
    <article className="starScoreGraph">
      <div className="titleWrapper">
        <h2 className="starScoreTitle">별점 그래프</h2>
        <div className="ratingLog">
          <p className="averageScore">평균 ★2.8</p>
          <p className="sumPerson">&#40;7,042명&#41;</p>
        </div>
      </div>
      <div className="graphWrapper">
        <div className="graph">그래프</div>
      </div>
    </article>
  );
};

export default StarScoreGraph;
