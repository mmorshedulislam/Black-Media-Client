import React from "react";

const Friend = ({ user }) => {
  return (
    <div className="my-3">
      <div className="flex items-center gap-4">
        <img className="w-12 h-12 rounded-full" src={user?.userImg} alt="" />
        <div className="font-medium dark:text-white">
          <div>{user?.userName}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 my-1 flex gap-x-2">
            <button className="bg-green-500 px-2 py-1 rounded-3xl text-white text-sm">
              Confirm
            </button>
            <button className="bg-red-400 px-2 py-1 rounded-3xl text-white text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
