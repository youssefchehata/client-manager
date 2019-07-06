import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <Link to="/clients/AddClient" className="btn btn-success btn-block">
      <i className="fas fa-plus" /> New
    </Link>
  );
};

export default Sidebar;
