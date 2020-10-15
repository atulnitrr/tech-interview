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

// https://ui.dev/react-router-v4-pass-props-to-components/

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <div className="app-container">
        <AppHeader setSearchTerm={setSearchTerm}></AppHeader>
        <LeftSideBar></LeftSideBar>
        <AppMain searchTerm={searchTerm}>
          <Switch>
            <Route
              path="/ds-algo"
              render={(props) => <Home {...props} searchTerm={searchTerm} />}
              exact
            ></Route>
            <Route path="/:problemid" component={Solution} exact></Route>
            <Route
              path="/"
              render={(props) => <Home {...props} searchTerm={searchTerm} />}
            ></Route>
          </Switch>
        </AppMain>
        <RightSideBar></RightSideBar>
      </div>
    </BrowserRouter>
  );
}

export default App;
