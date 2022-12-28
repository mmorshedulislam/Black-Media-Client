import React from "react";
import { useContext } from "react";
import { BiLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { BsFillHeartFill, BsHeart, BsThreeDots } from "react-icons/bs";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaComment } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const Post = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="my-2 bg-white border rounded-lg p-3">
      <div className="flex justify-between">
        <div className="flex gap-x-2">
          <img
            className="w-12 h-12 rounded-full"
            src={
              user?.photoURL
                ? user?.photoURL
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt={user?.photoURL}
          />
          <div>
            <h2 className="p-0 font-semibold">{user?.displayName}</h2>
            <p className="p-0 text-sm">2 hour ago</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-gray-200 rounded-full w-8 h-8">
          <BsThreeDots className="text-xl cursor-pointer" />
        </div>
      </div>

      <div>
        <img
          className="w-full rounded-md my-3"
          src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg"
          alt=""
        />
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          voluptas alias ipsam assumenda provident earum natus atque quod ipsum,
          consectetur molestiae aut nam porro qui aliquid nesciunt totam
          delectus minus.
        </p>
      </div>
      <div className="flex justify-between items-center my-5">
        <div className="flex gap-x-3">
          <button className="text-2xl">
            <BiLike className="text-blue-500" />
          </button>
          <button className="text-2xl">
            <BsFillHeartFill className="text-red-500" />
          </button>
          <span>2.8 Like</span>
          <button className="text-2xl">
            <FaComment className="text-gray-500" />
          </button>
          <span>22 Comments</span>
        </div>
        <div>
          <button className="flex justify-center items-center gap-x-2">
            <FiShare2 className="text-2xl" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
