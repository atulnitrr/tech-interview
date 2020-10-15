import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Solution from "./components/Solution";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:problemid" component={Solution}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
