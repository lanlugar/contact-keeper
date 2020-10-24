import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Alerts from "./components/layout/Alerts";
import "./App.css";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/authState";
import AlertState from "./context/alert/AlertState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import setAuthToken from "./utils/setAuthtoken";

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token"));
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/about" component={About}></Route>
                  <Route exact path="/register" component={Register}></Route>
                  <Route exact path="/login" component={Login}></Route>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
