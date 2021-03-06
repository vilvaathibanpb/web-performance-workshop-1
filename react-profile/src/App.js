import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Details from "./Details";
import Header from "./Header";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
