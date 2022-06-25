import React from "react";
import ThumbnailImage from "./components/ThumbnailImage/ThumbnailImage";
import Information from "./components/Information/Information";
import DescriptionCard from "./components/DescriptionCard/DescriptionCard";
import "./Detail.scss";

const Detail = () => {
  return (
    <div className="detailPage">
      <ThumbnailImage />
      <Information />
      <DescriptionCard />
    </div>
  );
};

export default Detail;

// const [filmsData, setFilmsData] = useState([]);

// useEffect(() => {
//   fetch("data/detailData.json", {
//     method: "GET",
//   })
//     .then(data => data.json())
//     .then(data => setFilmsData(data));
// }, []);
