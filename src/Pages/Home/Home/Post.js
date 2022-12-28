import React from "react";
import { FiVideo } from "react-icons/fi";
import { BsEmojiSmile, BsThreeDotsVertical } from "react-icons/bs";
import { HiPhoto } from "react-icons/hi2";

const Post = () => {
  return (
    <>
      <div className="flex gap-x-2">
        <img
          className="w-12 h-12 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
        />
        <textarea
          name="post"
          id=""
          placeholder="What's are you Think Now?"
          className="w-full h-24 rounded-md border"
        ></textarea>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-x-3 my-3 ml-14">
          <div className="flex gap-x-1 items-center justify-center cursor-pointer">
            <FiVideo className="text-2xl" />
            <span>Live Video</span>
          </div>
          <div className="flex gap-x-1 items-center justify-center cursor-pointer">
            <HiPhoto className="text-2xl" />
            <span>Photos</span>
          </div>
          <div className="flex gap-x-1 items-center justify-center cursor-pointer">
            <BsEmojiSmile className="text-2xl" />
            <span>Feeling/Activity</span>
          </div>
        </div>
        <div className="flex items-center justify-center bg-gray-200 rounded-full w-8 h-8">
          <BsThreeDotsVertical className="text-xl cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Post;
