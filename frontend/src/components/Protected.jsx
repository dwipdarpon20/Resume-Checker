import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Protected = () => {
  const { user , loading } = useAuth();

  if (loading) {
    return null;;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default Protected;