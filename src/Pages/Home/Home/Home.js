import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Drawer from "../../Drawer/Drawer";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="p-5">
        <CreatePost></CreatePost>
        <Post></Post>
      </div>
    </div>
  );
};

export default Home;
