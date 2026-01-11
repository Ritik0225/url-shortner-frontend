import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const ProtectedLayout = () => {
  const { user, loading } = useAuth();
  console.log("protected layout user:", user)
  if (loading) {
    return <div>Please wait...</div>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedLayout;
