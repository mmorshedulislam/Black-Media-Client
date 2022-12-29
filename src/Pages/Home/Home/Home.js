import React from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import TopRatingPosts from "./TopRatingPosts";

const Home = () => {
  return (
    <div className="p-5 mb-20">
      <CreatePost></CreatePost>
      <Posts></Posts>
      <TopRatingPosts></TopRatingPosts>
    </div>
  );
};

export default Home;
