import { format } from "date-fns";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import Comment from "./Comment";

const Comments = ({ post, comments }) => {
  const { user } = useContext(AuthContext);
  const [processing, setProcessing] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const handleComment = (data) => {
    const commentText = data.comment;
    const date = new Date();
    const commentDate = format(date, "PP");
    const comment = {
      postId: post._id,
      commentText,
      commentorName: user?.displayName,
      commentorEmail: user?.email,
      commentorImg: user?.photoURL,
      commentDate,
    };

    setProcessing(true);
    fetch(`${process.env.REACT_APP_PORT}/newcomment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reset();
        setProcessing(false);
        toast.success("Comment Upload.");
      })
      .catch((err) => {
        console.log(err);
        setProcessing(false);
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-5 lg:py-6">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Comments ({comments?.length})
          </h2>
        </div>
        <form onSubmit={handleSubmit(handleComment)} className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="4"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
              {...register("comment")}
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            disabled={processing}
          >
            Post comment
          </button>
        </form>
        {comments?.map((comment) => (
          <Comment key={comment?._id} comment={comment}></Comment>
        ))}
      </div>
    </section>
  );
};

export default Comments;
