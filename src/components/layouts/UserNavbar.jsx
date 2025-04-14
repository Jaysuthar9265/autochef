import { useNavigate } from "react-router-dom";


const UserNavbar = () => {
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
          <a href="/dashboard" className="nav-link">Home</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/my-recipes" className="nav-link">My Recipes</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/cart" className="nav-link">My Cart</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/orders" className="nav-link">My Orders</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/orders" className="nav-link">My Profile</a>
        </li>
      </ul>

      {/* Right Side: Search and Logout */}
      <ul className="navbar-nav ml-auto align-items-center">
        <li className="nav-item">
          <form className="form-inline">
            <div className="usersearch input-group input-group-sm">
              <input
                className="form-control form-control-navbar"
                type="search"
                placeholder="Search recipes..."
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </li>
        <li className="nav-item ml-2">
          <button onClick={handleLogout} className="btn btn-logout btn-sm">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavbar;
