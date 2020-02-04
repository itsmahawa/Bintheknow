import React from "react";

export default function Nonprofitprofile() {
  return (
    <div id="container">
      <div class="form-wrap">
        <h1 style={{ color: "grey" }}>Organization Profile</h1>

        <form>
          <div class="form-group">
            <label for="OrganizationName">Organization Name</label>
            <input
              class="form-control"
              type="text"
              placeholder="Organization Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Link to your website</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="www.ABCD.org"
            />
          </div>
          <form>
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Floor or Suite"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>MA</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>
          </form>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              <h6>Description</h6> Provide details that give our community
              insight into your organization, like your mission, values, whom
              you serve, etc.
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="NeighborhoodServed"> Neighborhoods Served:</label>
            <select multiple class="form-control" id="FormControlSelect2">
              <option>Greater Boston Area</option>
              <option>Mattapan</option>
              <option>Dorchester</option>
              <option>Roxbury</option>
              <option>Allston / Brighton</option>
            </select>
          </div>
          <div class="form-group">
            <label for="student-grade">Grade(s) Served</label>
            <select multiple class="form-control" id="FormControlSelect3">
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
            <label for="Password">Select Focus Areas: </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="option1"
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
