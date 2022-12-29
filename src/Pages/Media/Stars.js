import React from "react";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

const Stars = ({ratingChanged}) => {
  
  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={30}
        activeColor="#ffd700"
      />
    </div>
  );
};

export default Stars;
