import { useEffect, useState } from "react";
import UserNavbar from "../layouts/UserNavbar";
import UserSidebar from "../layouts/UserSidebar";

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="wrapper">
  
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <h2>Welcome, {user ? user.name : "User"}!</h2>
            <p>This is your dashboard.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserDashboard;
