import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return <div>{user.displayName && user?.displayName}</div>;
};

export default Home;
