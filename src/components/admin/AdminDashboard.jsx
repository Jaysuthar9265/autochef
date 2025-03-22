import { useEffect, useState } from "react";
const AdminDashboard = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);
  

    return (
        <div className="content-wrapper">
      <section className="content-header">
        <h1>Admin</h1>
      </section>
      <section className="content">
        <p>This is your admin dashboard.</p>
      </section>
    </div>
    );
  };
  
  export default AdminDashboard;
  