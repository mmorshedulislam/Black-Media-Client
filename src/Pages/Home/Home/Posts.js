import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";
import Spinner from "../../../Shared/Spinner";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`${process.env.REACT_APP_PORT}/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data.posts);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="rounded-md border p-3 my-5">
      <h2 className="text-2xl text-center font-bold">Popular Posts</h2>
      <div>
        {posts?.slice(0, 3)?.map((post) => (
          <Post key={post?._id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
