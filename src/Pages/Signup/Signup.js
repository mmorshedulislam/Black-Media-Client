import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
      <div
        className="hidden lg:block"
        style={{
          background: `url('http://uitheme.net/sociala/images/login-bg-2.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      ></div>
      <div className="p-10">
        <div className="flex gap-x-2 justify-end">
          <Link
            to={"/login"}
            className="px-6 py-3 rounded-3xl font-semibold bg-[#343A40] text-white"
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="px-6 py-3 rounded-3xl font-semibold bg-[#343A40] text-white"
          >
            Register
          </Link>
        </div>
        <div className="lg:w-2/3 mx-auto">
          <h2 className="font-bold text-5xl my-5">
            Create <br /> Your Account
          </h2>
          <form>
            <div class="relative my-3">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaUserAlt />
              </div>
              <input
                type="text"
                id=""
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div class="relative my-3">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BsFillEnvelopeFill />
              </div>
              <input
                type="email"
                id=""
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div class="relative my-3">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiFillLock />
              </div>
              <input
                type="password"
                id=""
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
              />
            </div>
            <div class="relative my-3">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiFillLock />
              </div>
              <input
                type="password"
                id=""
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Confirm Password"
              />
            </div>
            <div className="w-full bg-[#343A40] p-3 rounded-md text-white text-center cursor-pointer">
              <input
                type="submit"
                value="Register"
                className="cursor-pointer uppercase"
              />
            </div>
          </form>
          <p className="my-3 text-gray-500">
            Already have account?{" "}
            <Link to={"/login"} className="text-blue-500">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
