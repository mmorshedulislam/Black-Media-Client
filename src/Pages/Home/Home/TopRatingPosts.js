import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";

const TopRatingPosts = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_PORT}/postsbyratings`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data.posts);
      });
  }, []);
  return (
    <div className="rounded-md border p-3">
      <h2 className="text-2xl text-center italic">Top Rated Posts</h2>
      <div>
        {posts?.slice(0, 3).map((post) => (
          <Post key={post._id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default TopRatingPosts;
