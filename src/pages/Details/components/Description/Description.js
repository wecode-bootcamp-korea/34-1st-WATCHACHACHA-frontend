import React from "react";
import FilmCrew from "../FilmCrew/FilmCrew";
import BasicInfo from "../BasicInfo/BasicInfo";
import StarScoreGraph from "../StarScoreGraph/StarScoreGraph";
import Comments from "../Comments/Comments";
import "./Description.scss";

const Description = ({ filmsData }) => {
  return (
    <section className="description">
      <BasicInfo filmsData={filmsData} />
      <FilmCrew filmsData={filmsData} />
      <StarScoreGraph />
      <Comments filmsData={filmsData} />
    </section>
  );
};

export default Description;
