import { useNavigate } from "react-router-dom";
const AdminNavbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem("user"); // Clear user data
      navigate("/login"); // Redirect to login page
    };
  

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left Navbar */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">Home</a>
          </li>
        </ul>
  
        {/* Right Navbar - Logout Button */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default AdminNavbar;
  