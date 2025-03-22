import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AdminNavbar from "../layouts/AdminNavbar";
import AdminSidebar from "../layouts/AdminSidebar";



const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.role !== "67c60781ef6c253d32930552") {
      navigate("/login"); // Redirect if not an admin
    }
  }, [navigate]);

  return (
    <div className="wrapper">
      <AdminNavbar />
      <AdminSidebar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
