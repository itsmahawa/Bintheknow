import React from "react";

export default function Submitreview() {
  return (
    <div id="container">
      <div class="form-wrap">
        <h1 style={{ color: "grey" }}>Submit a Review</h1>
        <p style={{ color: "grey" }}>
          Help other families by submitting honest reviews
        </p>
        <form>
          <div class="form-group">
            <label for="OrganizationName"> Select an Organization</label>
            <select class="form-control" id="FormControlSelect2">
              <option>Boston Debate League</option>
              <option>
                Boston Area Health Education Center - Summer Program
              </option>
              <option>Steppingstone Foundation</option>
              <option>Summer Search</option>
              <option>Youth Enrichment Services</option>
            </select>
          </div>

          <div class="form-group">
            <label for="FormControlSelect1">Rate the Program</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>5 (Amazing Organization!) </option>
              <option>4</option>
              <option>3 ( Okay, just need a few improvements!) </option>
              <option>2</option>
              <option>1 ( Needs a lot of work!)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">
              Things the organization does well:
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Things the organization should improve on:
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea3"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-secondary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
