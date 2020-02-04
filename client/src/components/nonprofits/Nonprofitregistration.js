import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import uuid from "uuid";

export default function Nonprofitregistration(props) {
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const history = useHistory();

  const handleRegistration = e => {
    e.preventDefault();
    // Check if passwords are match
    if (password !== password2) {
      alert("The passwords you entered don't match, please try it again");
      return;
    }
    // Check if username is taken
    for (let user of props.users) {
      if (user.email === email) {
        alert("Username is taken, please try another one");
        return;
      }
    }
    // Add new user into users
    const newUser = {
      _id: uuid.v4(),
      email: email,
      password: password,
      firstName: "",
      lastName: ""
    };
    props.addUser(newUser);
    // Navigate user into his profile
    history.push(`/user/${newUser._id}`);
  };

  return (
    <div id="container">
      <div class="form-wrap">
        <h1 style={{ color: "grey" }}>Registration</h1>
        <p>Register and create a profile to reach more families!</p>
        <form onSubmit={handleRegistration}>
          <div class="form-group">
            <label for="OrgName">Organization Name</label>
            <input
              type="text"
              placeholder="Organization Name"
              value={organizationName}
              onChange={e => setOrganizationName(e.target.value)}
            />
          </div>
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
