import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import RegisterForm from "./components/authForm/RegisterForm";
import LoginForm from "./components/authForm/LoginForm";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/login" component={LoginForm} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
