import React from "react";
import { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import Home from "./components/Home";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Solution from "./components/Solution";

function App() {
  const [serarchTerm, setSearchTerm] = useState("");
  return (
    <BrowserRouter>
      <div className="app-container">
        <AppHeader setSearchTerm={setSearchTerm}></AppHeader>
        <LeftSideBar></LeftSideBar>
        <AppMain serarchTerm={serarchTerm}>
          <Switch>
            <Route path="/ds-algo" component={Home} exact></Route>
            <Route path="/:problemid" component={Solution} exact></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </AppMain>
        <RightSideBar></RightSideBar>
      </div>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Switch>
<Route path="/:problemid" component={Solution} exact></Route>
<Route path="/" component={Home}></Route>
</Switch> */
}
