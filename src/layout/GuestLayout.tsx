import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const GuestLayout = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>please wait...</div>;
  }

  if (user) {
    return <Navigate to="/urlShortner" replace />;
  }

  return <Outlet />;
};

export default GuestLayout;
