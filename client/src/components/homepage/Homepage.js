import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div class="page">
      <img
        src="https://www.boston.gov/sites/default/files/img/2018/w/walsh-teens.jpg"
        width="100%"
        alt="blackteens"
      />
      <div class="parent-box">
        <div class="container">
          <h3> Students</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div class="btn-space">
            <button class="btn btn-light">
              <Link to="Familyregistration">Register</Link>
            </button>
            &nbsp;
            <button class="btn btn-light">
              <Link to="Familylogin">Login</Link>
            </button>
          </div>
        </div>
      </div>

      <div class="nonprofit-box">
        <div class="container">
          <h3>Nonprofits</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div class="btn-space">
            <button class="btn btn-light">
              <Link to="Nonprofitregistration">Register</Link>
            </button>
            &nbsp;
            <button class="btn btn-light">
              <Link to="Nonprofitlogin">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
