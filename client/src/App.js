import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Family Components
import Familylogin from "./components/family/Familylogin";
import Familyprofile from "./components/family/Familyprofile";
import Familyregistration from "./components/family/Familyregistration";
import Submitreview from "./components/family/Submitreview";

//Homepage Components
import Aboutus from "./components/homepage/Aboutus";
import Faq from "./components/homepage/Faq";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/homepage/Navbar";
import Footer from "./components/homepage/Footer";

//Nonprofits Components
import Nonprofitlogin from "./components/nonprofits/Nonprofitlogin";
import Nonprofitprofile from "./components/nonprofits/Nonprofitprofile";
import Nonprofitregistration from "./components/nonprofits/Nonprofitregistration";

import Search from "./components/Search";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/Aboutus">
          <Aboutus />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Route exact path="/Familylogin">
          <Familylogin />
        </Route>
        <Route exact path="/Familyregistration">
          <Familyregistration />
        </Route>
        <Route exact path="/Familyprofile/:id">
          <Familyprofile />
        </Route>
        <Route exact path="/Submitreview">
          <Submitreview />
        </Route>
        <Route exact path="/Nonprofitlogin">
          <Nonprofitlogin />
        </Route>
        <Route exact path="/Nonprofitregistration">
          <Nonprofitregistration />
        </Route>
        <Route exact path="/Nonprofitprofile/:id">
          <Nonprofitprofile />
        </Route>
        <Route exact path="/Search">
          <Search />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
