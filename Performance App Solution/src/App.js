import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
const Details = React.lazy(() => import(/* webpackPrefetch: true */"./Details")) ;
import Header from "./Header";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/details">
          <Suspense fallback="">
            <Details />
          </Suspense>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
