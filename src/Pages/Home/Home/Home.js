import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Home = () => {
  return (
    <div className="p-5 mb-20">
      <CreatePost></CreatePost>
      <Post></Post>
    </div>
  );
};

export default Home;
