import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";

const Posts = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_PORT}/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data.posts);
      });
  }, []);
  return (
    <div className="rounded-md border p-3 my-5">
      <h2 className="text-2xl text-center italic">Popular Posts</h2>
      <div>
        {posts?.slice(0, 3).map((post) => (
          <Post key={post._id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
