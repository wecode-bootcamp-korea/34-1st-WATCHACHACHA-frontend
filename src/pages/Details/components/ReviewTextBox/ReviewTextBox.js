import React from "react";

const ReviewTextBox = ({ clicked }) => {
  const textList = [
    "별로에요",
    "그저 그래요",
    "보통이에요",
    "좋아요",
    "최고에요",
  ];

  return (
    <>
      {[1, 2, 3, 4, 5].map(number => {
        return (
          <p
            style={
              clicked === number ? { display: "block" } : { display: "none" }
            }
            key={number}
          >
            {textList[number - 1]}
          </p>
        );
      })}
    </>
  );
};

export default ReviewTextBox;
