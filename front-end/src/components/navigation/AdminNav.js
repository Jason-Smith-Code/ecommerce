import React from "react";
import "./AdminNav.css";
import { Link } from "react-router-dom";

export const AdminNav = () => {
  return (
    <nav id="admin-menu">
      <ul>
        <li>
          <Link className="admin-link" to="/admin/">
            overview
          </Link>
        </li>
        <li>
          <Link className="admin-link" to="/admin/create-product">
            Create Product
          </Link>
        </li>
        <li>
          <Link className="admin-link" to="/admin/">
            Categories
          </Link>
        </li>
        <li>
          <Link className="admin-link" to="/admin/">
            Orders
          </Link>
        </li>
        <li>
          <Link className="admin-link" to="/admin/">
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};
