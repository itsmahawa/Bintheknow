import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Nonprofitlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleLogin = async e => {
    e.preventDefault();
    const formData = { email, password };
    const res = await axios.post("/api/user/login", formData);
    if (res.data) {
      localStorage.setItem("token", res.data.token);
      const user = res.data.user;
      history.push(`/Nonprofitprofile/${user._id}`);
    } else {
      alert("Email or password is incorrect");
    }
  };

  return (
    <div class="container">
      <div class="form-wrap">
        <h1 style={{ color: "grey" }}>Nonprofit Login</h1>
        <form onSubmit={handleLogin}>
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
          <button type="button" className="btn btn-primary">
            Submit
          </button>
          <button type="button" className="btn btn-danger">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
