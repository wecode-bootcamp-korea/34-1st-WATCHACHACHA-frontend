import React from "react";
import BasicInfo from "../BasicInfo/BasicInfo";
import FilmCrew from "../FilmCrew/FilmCrew";
import "./Description.scss";

const Description = () => {
  return (
    <section className="description">
      <BasicInfo />
      <FilmCrew />
    </section>
  );
};

export default Description;
