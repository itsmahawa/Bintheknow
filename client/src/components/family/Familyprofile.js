import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function Familyprofile(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const params = useParams();

  const getUser = async () => {
    const res = await axios.get(`/api/user/${params.uid}`);
    const user = res.data;

    setEmail(user.email);
    setPassword(user.password);
  };

  useEffect(() => {
    getUser();
    //eslint-disable-next-line
  }, []);

  const update = async () => {
    const newUser = {
      _id: params.uid,
      password: password,
      email: email
    };

    // update user in users
    await axios.put("/api/user", newUser);

    alert("user info is updated!");
  };

  const logout = () => {
    delete axios.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <div>
      <nav className="navbar bg-primary navbar-dark fixed-top">
        <span className="navbar-brand h1 mb-0">Profile</span>
        <span className="click" onClick={update}>
          <i className="fas fa-check text-light" />
        </span>
      </nav>

      <div id="container">
        <div class="form-wrap">
          <h1 style={{ color: "grey" }}>Family Profile</h1>
          <p style={{ color: "grey" }}>
            Complete a profile to get program recommendations.
          </p>

          <form>
            <div class="form-group">
              <label for="First-Name">Student First Name</label>
              <input type="text" name="FirstName" id="first-name" />
            </div>
            <div class="form-group">
              <label for="OrganizationName"> Select school:</label>
              <select class="form-control" id="FormControlSelect2">
                <option>Boston Latin Academy</option>
                <option>Irving Middle School</option>
                <option>McCormack Middle School</option>
                <option>English High School</option>
                <option>Jeremiah E Burke High School</option>
              </select>
            </div>
            <div class="form-group">
              <label for="student-grade">Student Grade</label>
              <select class="form-control" id="FormControlSelect3">
                <option>6th</option>
                <option>7th</option>
                <option>8th</option>
                <option>High School Freshman (9th)</option>
                <option>High School Sophomore (10th)</option>
                <option>High School Junior (11th)</option>
                <option>High School Senior (12th)</option>
              </select>
            </div>
            <div class="form-group">
              <label for="Password">Select Student Interests: </label>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  In-School Education Support
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck2"
                />
                <label class="form-check-label" for="defaultCheck2">
                  After-School Education Support
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck3"
                />
                <label class="form-check-label" for="defaultCheck3">
                  Sports Enrichment
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck4"
                />
                <label class="form-check-label" for="defaultCheck4">
                  College Prep/ Financial Aid Assistance
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck5"
                />
                <label class="form-check-label" for="defaultCheck5">
                  Arts / Civic Engagement
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
