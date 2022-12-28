import React from "react";

import SingleMedia from "./SingleMedia";

const Media = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl lg:text-4xl my-5 font-bold">My Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
