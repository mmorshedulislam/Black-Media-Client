import React from "react";

const Message = ({ user }) => {
  return (
    <div className="my-3">
      <div className="flex items-center gap-4">
        <img className="w-12 h-12 rounded-full" src={user?.userImg} alt="" />
        <div className="font-medium dark:text-white">
          <div>{user?.userName}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Joined in August 2014
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
