import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Friend from "./Friend";

const FriendRequests = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_PORT}/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  return (
    <div className="p-5 mb-20">
      <h2 className="text-2xl">Friend Requests: {users?.length}</h2>
      {users.map((user) => (
        <Friend key={user?._id} user={user}></Friend>
      ))}
    </div>
  );
};

export default FriendRequests;
