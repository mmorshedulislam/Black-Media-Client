import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Drawer from "../../Drawer/Drawer";
import Post from "./Post";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr]">
      {/* Drawer */}
      <div className="relative">
        {/* <Drawer></Drawer> */}
        Drawer
      </div>

      {/* Post Section */}
      <div className="p-5">
        <Post></Post>
      </div>

      {/* Sidebar */}
      <div>SideBar</div>
    </div>
  );
};

export default Home;
