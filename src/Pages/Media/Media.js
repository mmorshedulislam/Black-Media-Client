import React, { useContext } from "react";

import SingleMedia from "./SingleMedia";


const Media = () => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr]">
      <div></div>
      <div>
        <h2 className="text-2xl lg:text-4xl my-5 font-bold">My Media</h2>
      <div className="grid grdi-cols-2 lg:grid-cols-3 gap-3">
        <SingleMedia></SingleMedia>
        <SingleMedia></SingleMedia>
        <SingleMedia></SingleMedia>
        <SingleMedia></SingleMedia>
      </div>
      </div>
    </div>
  );
};

export default Media;
