import { Outlet, Navigate } from "react-router-dom";
import UserNavbar from "../layouts/UserNavbar";
import UserSidebar from "../layouts/UserSidebar";

const UserLayout = () => {
  const isAuthenticated = localStorage.getItem("user"); // Check if user is logged in

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return (
    <div className="wrapper">
      <UserNavbar />
      <UserSidebar />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
