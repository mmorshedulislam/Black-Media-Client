import React, { useEffect } from "react";
import { useContext } from "react";
import { BiLike } from "react-icons/bi";
import { BsFillHeartFill, BsThreeDots } from "react-icons/bs";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaComment } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Post = ({ post }) => {
  const {
    _id,
    postText,
    postImgUrl,
    authorName,
    authorImage,
    postDate,
    likes,
    loves,
  } = post;
  const { user } = useContext(AuthContext);
  // const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_PORT}/comment/${post?._id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComments(data);
      });
  }, [post?._id]);

  const handleLikes = () => {
    const newLike = likes + 1;
    const likeData = {
      postId: post._id,
      newLike,
    };
    fetch(`${process.env.REACT_APP_PORT}/newlike`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(likeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLoves = () => {
    const newLove = loves + 1;
    const loveData = {
      postId: post._id,
      newLove,
    };
    fetch(`${process.env.REACT_APP_PORT}/newlove`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loveData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="my-2 bg-white border rounded-lg p-3">
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
        <img className="w-full rounded-md my-3" src={postImgUrl} alt="" />
        <p className="text-justify">
          {postText?.slice(0, 150)}...{" "}
          <Link
            to={`/postDetails/${_id}`}
            className="text-blue-400 font-semibold"
          >
            Read More
          </Link>
        </p>
      </div>
      <div className="flex justify-between items-center my-5">
        <div className="flex gap-x-3">
          <button className="text-2xl" onClick={handleLikes}>
            <BiLike className="text-blue-500" />
          </button>
          <span>{likes}</span>
          <button className="text-2xl" onClick={handleLoves}>
            <BsFillHeartFill className="text-red-500" />
          </button>
          <span>{loves}</span>
          <button className="text-2xl">
            <FaComment className="text-gray-500" />
          </button>
          <Link to={`/postDetails/${_id}`}>{comments?.length} Comments</Link>
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
