import React from "react";
import { Search } from "lucide-react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">
          Welcome to the WizFit
          <br /> Challenge
        </h1>
      </div>

      <div className="search-container">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search for School, Teacher, Student"
          className="search-input"
        />
      </div>

      <button className="sign-in-button">SIGN IN</button>
    </nav>
  );
};

export default Navbar;
