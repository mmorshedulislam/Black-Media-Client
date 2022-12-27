import React from "react";
import { Link } from "react-router-dom";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();

  const handleSignInUser = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(data);
    return signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
        toast.success("Login Successfully.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
            Login into <br /> Your Account
          </h2>
          <form onSubmit={handleSubmit(handleSignInUser)}>
            <div class="relative my-3">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BsFillEnvelopeFill />
              </div>
              <input
                type="email"
                id=""
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Email"
                {...register("email", { required: true })}
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
                {...register("password", { required: true })}
              />
            </div>
            <div className="flex justify-between my-3">
              <p className="text-sm flex justify-center items-center">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />{" "}
                <span className="ml-2">Remember Me</span>
              </p>
              <button className="text-sm">Forgot Password?</button>
            </div>
            <div className="w-full bg-[#343A40] p-3 rounded-md text-white text-center cursor-pointer">
              <input
                type="submit"
                value="Login"
                className="cursor-pointer uppercase"
              />
            </div>
          </form>
          <p className="my-3 text-gray-500">
            Don't have account?{" "}
            <Link to={"/signup"} className="text-blue-500">
              Register
            </Link>{" "}
          </p>
          <hr className="my-5 h-px bg-gray-600" />
          <button
            type="button"
            class="text-white bg-blue-400 hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="text-2xl mr-5" />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
