/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import SearchPage from "views/examples/SearchPage.js";
import ResultsPage from "views/examples/ResultsPage.js";

import LoginPage from "views/examples/LoginPage.js";
import VehicleListing from "views/examples/VehicleListing.js";
import NewVehicleListing from "views/examples/NewVehicleListing.js";
require('dotenv').config()

ReactDOM.render(
  <BrowserRouter>
    <CookiesProvider>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route path="/profile" render={props => <ProfilePage {...props} />} />
        <Route path="/register" render={props => <RegisterPage {...props} />} />
        <Route path="/login" render={props => <LoginPage {...props} />} />
        <Route path="/search" render={props => <SearchPage {...props} />} />
        <Route path="/results" render={props => <ResultsPage {...props} />} />
        <Route
          path="/listing"
          render={props => <VehicleListing {...props} />}
        />
        <Route
          path="/new-listing"
          render={props => <NewVehicleListing {...props} />}
        />
        <Redirect to="/index" />
      </Switch>
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
