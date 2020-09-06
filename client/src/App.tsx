import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
      </Router>
    </Fragment>
  );
}

export default App;
