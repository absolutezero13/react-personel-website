import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="link">
        <h3>Home</h3>
      </NavLink>
      <NavLink to="/projects" className="link">
        <h3>Projects</h3>
      </NavLink>
      <NavLink to="/aboutme" className="link">
        <h3> About Me</h3>
      </NavLink>
      <NavLink to="/contact" className="link">
        <h3> Contact</h3>
      </NavLink>
    </header>
  );
};
export default Header;
