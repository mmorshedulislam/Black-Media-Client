import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import NavBar from "../Pages/NavBar/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr]">
        {/* Drawer */}
        <div className="relative">
          {/* <Drawer></Drawer> */}
          Drawer
        </div>

        <Outlet></Outlet>

        {/* Sidebar */}
        <div>SideBar</div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
