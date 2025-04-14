import React from "react";
import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand */}
      <a href="#" className="brand-link">
        <span className="brand-text">AutoChef</span>
      </a>

      {/* Sidebar */}
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Recipes with submenu */}
            <li className="nav-header"><b>Recipes</b></li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-fire"></i>
                <p>Popular</p>
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-utensils"></i>
                <p>Meal</p>
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-leaf"></i>
                <p>Diet</p>
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-carrot"></i>
                <p>Ingredients</p>
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-concierge-bell"></i>
                <p>Dish Type</p>
              </a>
            </li>
            <li className="nav-header">
              <a href="#" className="nav-item"><b>Dashboard</b></a>
            </li>
            <li className="nav-header">
              <a href="#" className="nav-item"><b>Explore More</b></a>
            </li>
            <li className="nav-header">
            <NavLink to="/about" className="nav-item">
                <b>About</b>
              </NavLink>
              {/* <a href="#" className="nav-item"><b>About</b></a> */}
            </li>
          </ul>
            
           
        </nav>
      </div>
    </aside>
  );
};

export default UserSidebar;
