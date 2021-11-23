import React from "react";
import { withRouter, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="flex">
        <img src="/logo.png" alt="Hooks News Logo" className="logo" />
        <NavLink to="/" className="header-title">
          Hooks News
        </NavLink>
        <NavLink to="/" className="header-link">
          new
        </NavLink>
        <div className="divider">|</div>
        <NavLink className="header-link" to="/top">
          top
        </NavLink>
        <div className="divider">|</div>
        <NavLink className="header-link" to="search">
          search
        </NavLink>
        <div className="divider">|</div>
        <NavLink className="header-link" to="/create">
          submit
        </NavLink>
      </div>
      <div className="flex">
        <NavLink className="header-link" to="/login">
          login
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
