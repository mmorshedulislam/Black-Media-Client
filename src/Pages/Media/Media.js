import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Spinner from "../../Shared/Spinner";

import SingleMedia from "./SingleMedia";

const Media = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // fetch(`${process.env.REACT_APP_PORT}/postsbyuser?user=${user?.email}`)
    fetch(`${process.env.REACT_APP_PORT}/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data.posts);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <div>
        <h2 className="text-2xl lg:text-4xl my-5 font-bold">
          Media: {posts.length}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {posts.map((post) => (
            <SingleMedia key={post._id} post={post}></SingleMedia>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
