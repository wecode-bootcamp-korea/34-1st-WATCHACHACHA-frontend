import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SkeletonUi from "./components/SkeletonUi/SkeletonUi";
import ThumbnailImage from "./components/ThumbnailImage/ThumbnailImage";
import Information from "./components/Information/Information";
import DescriptionCard from "./components/DescriptionCard/DescriptionCard";

const Detail = () => {
  const params = useParams();

  const [filmsData, setFilmsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isSeeingCondition, setIsSeeingCondition] = useState(true);
  const [isCommentCondition, setIsCommentCondition] = useState(true);

  const [userName, setUserName] = useState([]);

  const addCommentButton = () => setIsCommentCondition(!isCommentCondition);

  useEffect(() => {
    fetch(`http://10.58.2.194:8000/films/${params.id}`)
      .then(res => res.json())
      .then(res => setFilmsData(res))
      .then(() => setIsLoading(false));
  }, []);

  const getUserName = () => {
    fetch("http://10.58.2.194:8000/users", {
      method: "GET",
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then(res => res.json())
      .then(data => setUserName(data));
  };

  const postUserId = () => {
    fetch("http://10.58.2.194:8000/users/watchlist", {
      method: "POST",
      headers: { Authorization: localStorage.getItem("token") },
      body: JSON.stringify({ film_id: params.id }),
    });
  };

  if (isLoading) return <SkeletonUi />;

  return (
    <div className="detailPage">
      <ThumbnailImage />
      <Information
        isSeeingCondition={isSeeingCondition}
        setIsSeeingCondition={setIsSeeingCondition}
        isCommentCondition={isCommentCondition}
        addCommentButton={addCommentButton}
        filmData={filmsData}
        getUserName={getUserName}
        postUserId={postUserId}
      />
      <DescriptionCard
        isSeeingCondition={isSeeingCondition}
        isCommentCondition={isCommentCondition}
        addCommentButton={addCommentButton}
        filmData={filmsData}
        userName={userName}
      />
    </div>
  );
};

export default Detail;
