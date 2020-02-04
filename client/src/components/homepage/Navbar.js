import React from "react";
import { Link } from "react-router-dom";
import BITKLongLogo from "../../images/BITK long logo.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div class="bg-white">
        <a class="navbar-brand" href="/">
          <img src={BITKLongLogo} class="logo" alt="logo"></img>
        </a>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/Aboutus">About Us</Link>
        <Link to="/Faq">Frequently Asked Questions</Link>
        <form class="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            aria-label="Search"
          />
          <button class="btn btn-small btn-secondary" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
