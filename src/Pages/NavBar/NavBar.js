import React from "react";
import { MdOutlinePermMedia } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { TfiUser } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { ImUserPlus } from "react-icons/im";
import { SlLogin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
            Black Media
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden  text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-2xl p-2.5 mr-1"
          >
            <BiSearchAlt />
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BiSearchAlt />
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BiSearchAlt />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex gap-y-3 flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to={"/"} className="text-2xl">
                <FaHome />
              </Link>
            </li>
            <li>
              <Link to={"/messages"} className="text-2xl">
                <BsMessenger />
              </Link>
            </li>
            <li>
              <Link to={"/profile"} className="text-2xl">
                <TfiUser />
              </Link>
            </li>
            <li>
              <Link to={"/media"} className="text-2xl">
                <MdOutlinePermMedia />
              </Link>
            </li>
            {!user ? (
              <>
                <li>
                  <Link to={"/login"} className="text-2xl">
                    <AiOutlineLogin />
                  </Link>
                </li>
                <li>
                  <Link to={"/signup"} className="text-2xl">
                    <ImUserPlus />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button onClick={logOut} className="text-2xl">
                    <SlLogin />
                  </button>
                </li>
              </>
            )}

            {/* <!-- drawer init and toggle start --> */}
            {/* <div className="text-center">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                type="button"
                data-drawer-target="drawer-backdrop"
                data-drawer-show="drawer-backdrop"
                data-drawer-backdrop="true"
                aria-controls="drawer-backdrop"
              >
                Open
              </button>
            </div> */}
            {/* <!-- drawer init and toggle ends --> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
