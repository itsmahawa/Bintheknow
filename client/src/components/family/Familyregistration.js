import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Familyregistration(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const history = useHistory();

  const register = async e => {
    e.preventDefault();

    // Check if passwords are match
    if (password !== password2) {
      alert("The passwords you entered don't match, please try it again");
      return;
    }

    // Add new user into database
    const newUser = {
      email: email,
      password: password
    };
    const res2 = await axios.post("/api/user/register", newUser);
    localStorage.setItem("token", res2.data.token);

    // Navigate user to their profile
    history.push(`/user/${res2.data.user._id}`);
  };

  return (
    <div id="container">
      <div className="form-wrap">
        <h1 style={{ color: "grey" }}>Registration</h1>
        <p>It's free and only takes a minute</p>
        <form onSubmit={register}>
          <div class="form-group">
            <label for="Email">Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="Password">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="password2">Confirm Password</label>
            <input
              type="password"
              placeholder="Verify Password"
              value={password2}
              onChange={e => setPassword2(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-block">Sign Up</button>
          <Link className="btn btn-danger btn-block" to="/">
            Cancel
          </Link>
          <p>
            Already have an account? <a href="familylogin">Login Here</a>
          </p>
        </form>
      </div>
    </div>
  );
}
