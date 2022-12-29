import React, { useEffect } from "react";
import { useState } from "react";
import Message from "./Message";

const Messages = () => {
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
    <div className="p-5">
      <h2 className="text-2xl">Active: {users?.length}</h2>
      {
        users.map(user => <Message key={user?._id} user={user}></Message>)
      }
    </div>
  );
};

export default Messages;
