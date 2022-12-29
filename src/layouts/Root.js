import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../Pages/Drawer/Drawer";
import Footer from "../Pages/Footer/Footer";
import FriendRequests from "../Pages/FriendRequests/FriendRequests";
import MenuSideBar from "../Pages/MenuSideBar/MenuSideBar";
import NavBar from "../Pages/NavBar/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr]">
        {/* Drawer */}
        <div className="order-2 lg:order-1 hidden lg:block">
          {/* <Drawer></Drawer> */}
          <MenuSideBar></MenuSideBar>
        </div>

        <div className="order-1 lg:order-2">
          <Outlet></Outlet>
        </div>

        {/* Sidebar */}
        <div className="order-3">
          <FriendRequests></FriendRequests>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
