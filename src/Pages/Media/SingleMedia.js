import React, { useContext } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthProvider";

const SingleMedia = ({ post }) => {
  const { user } = useContext(AuthContext);
  const { postText, postImgUrl, authorName, authorImage, postDate } =
    post;
  return (
    <div className="border border-gray-300 rounded-md p-2 mx-5">
      <div className="flex justify-between">
        <div className="flex gap-x-2">
          <img
            className="w-12 h-12 rounded-full"
            src={
              authorImage
                ? authorImage
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt={authorImage}
          />
          <div>
            <h2 className="p-0 font-semibold">{authorName}</h2>
            <p className="p-0 text-xs">{postDate}</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-gray-200 rounded-full w-8 h-8">
          <BsThreeDots className="text-xl cursor-pointer" />
        </div>
      </div>
      <div>
        <div>
          <img className="w-full rounded-md my-3" src={postImgUrl} alt="" />
          <p className="text-justify">{postText} ...</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMedia;
