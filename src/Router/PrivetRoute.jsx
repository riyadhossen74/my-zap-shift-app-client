import React from "react";
import useAuth from "../hook/useAuth";
import { Navigate } from "react-router";
import Loader from "../Loader/Loader";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default PrivetRoute;
