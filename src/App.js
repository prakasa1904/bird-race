import React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";
import Loadable from "react-loadable";
import { object } from "prop-types";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

// import Routes from "./routes";
// <Router>
//   <Routes />
// </Router>

const App = ({ history }) => <div>Hello World</div>;

App.propTypes = {
  history: object.isRequired
};

export default hot(module)(App);
