import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
