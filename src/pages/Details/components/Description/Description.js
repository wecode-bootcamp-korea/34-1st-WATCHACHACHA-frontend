import React from "react";
import FilmCrew from "../FilmCrew/FilmCrew";
import BasicInfo from "../BasicInfo/BasicInfo";
import StarScoreGraph from "../StarScoreGraph/StarScoreGraph";
import "./Description.scss";

const Description = () => {
  return (
    <section className="description">
      <BasicInfo />
      <FilmCrew />
      <StarScoreGraph />
    </section>
  );
};

export default Description;
