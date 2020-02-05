import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  async function onSubmit(e) {
    e.preventDefault();
    const formData = { email: email, password: password };
    const res = await axios.post("/api/user/login", formData);
    if (res.data) {
      localStorage.setItem("token", res.data.token);
      const user = res.data.user;
      history.push(`/Familyprofile/${user._id}`);
    } else {
      alert("Email or password is incorrect");
    }
  }

  return (
    <div class="container">
      <div class="form-wrap">
        <h1 style={{ color: "grey" }}>Login</h1>
        <form onSubmit={onSubmit}>
          <div class="form-group">
            <label for="Email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abcd@gmail.com"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="Password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-primary btn-block">Submit </button>
          <Link className="btn btn-danger btn-block" to="/">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}
