import React from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

const Home = () => {
  return (
    <div className="p-5 mb-20">
      <CreatePost></CreatePost>
      <Posts></Posts>
    </div>
  );
};

export default Home;
