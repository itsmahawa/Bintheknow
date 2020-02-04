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
    // // Check if username is taken
    // const res = await axios.get(`/api/user?username=${username}`);
    // if (res.data) {
    //   alert("Username is taken, please try another one");
    //   return;
    // }

    // Add new user into users
    const newUser = {
      email: email,
      password: password
    };
    props.addUser(newUser);
    // Navigate user into his profile
    history.push(`/user/${newUser._id}`);
  };

  return (
    <div id="container">
      <div class="form-wrap">
        <h1 style={{ color: "grey" }}>Registration</h1>
        <p>It's free and only takes a minute</p>
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
        <button type="button" class="btn btn-primary">
          Sign Up
        </button>
        <button type="button" class="btn btn-danger ">
          Cancel
        </button>
        <p>
          Already have an account? <a href="familylogin">Login Here</a>
        </p>
      </div>
    </div>
  );
}
