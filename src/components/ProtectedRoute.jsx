import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  //   const { user } = useContext(AuthContext);
  //   return user ? <Outlet /> : <Navigate to="/" replace />;
  const { user } = useContext(AuthContext);

  if (!user) {
    console.log("user", user);
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
