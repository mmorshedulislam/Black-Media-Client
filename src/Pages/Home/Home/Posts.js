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
    <div>
      {posts?.map((post) => (
        <Post key={post._id} post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
