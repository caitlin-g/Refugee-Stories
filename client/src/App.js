import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import Home from "../components/Home";
import "./App.css";

class App extends Component {
  render() {
    return <Route exact path="/" component={Home} />;
  }
}

export default withRouter(App);
