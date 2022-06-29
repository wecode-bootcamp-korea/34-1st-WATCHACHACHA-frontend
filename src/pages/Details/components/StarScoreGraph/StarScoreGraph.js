import React from "react";
import "./StarScoreGraph.scss";

const StarScoreGraph = () => {
  return (
    <div className="starScoreGraph">
      <div className="titleWrapper">
        <h2 className="starScoreTitle">별점 그래프</h2>
        <div className="ratingLog">
          <p className="averageScore">평균 ★3.9</p>
          <p className="sumPerson">`(27만명)`</p>
        </div>
      </div>
      <div className="graphWrapper">
        <div className="graph">
          <img
            className="graphImage"
            src="/images/icon/graph.png"
            alt="graph"
          />
        </div>
      </div>
    </div>
  );
};

export default StarScoreGraph;
