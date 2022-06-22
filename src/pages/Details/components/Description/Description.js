import React from "react";
import FilmCrew from "../FilmCrew/FilmCrew";
import BasicInfo from "../BasicInfo/BasicInfo";
import StarScoreGraph from "../StarScoreGraph/StarScoreGraph";
import Comments from "../Comments/Comments";
import "./Description.scss";

const Description = () => {
  return (
    <section className="description">
      <BasicInfo />
      <FilmCrew />
      <StarScoreGraph />
      <Comments />
    </section>
  );
};

export default Description;
