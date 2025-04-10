const AdminSidebar = () => {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="#" className="brand-link">
          <span className="brand-text font-weight-light">AutoChef</span>
        </a>
        <div className="sidebar">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-home"></i>
                  <p>Admin Dashboard</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-user"></i>
                  <p>Profile</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  };
  
  export default AdminSidebar;
  