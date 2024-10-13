import React from "react";
import { Nav } from "react-bootstrap";
import "../sidebar.css";
import { Link } from "react-router-dom";

const SidebarStaff = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Link to="profile" className="active">
          Profile
        </Link>
        <Link to="manage-appointments">Manage Appointments</Link>
        <Link to="transaction">Transaction</Link>
        <Link to="salary">Salary</Link>
      </Nav>
    </div>
  );
};

export default SidebarStaff;
