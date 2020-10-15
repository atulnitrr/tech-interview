import React from "react";
import "./LeftSideBar.css";
import { Link } from "react-router-dom";

function LeftSideBar() {
  return (
    <aside className="app-leftsidebar">
      <div className="app-lsb-navlinks-w">
        <div>
          <Link to="/ds-algo">Ds&Algo</Link>
        </div>
        <div>
          <Link to="/to">System designs</Link>
        </div>
      </div>
      <footer>&copy; Atul 2019-2020 </footer>
    </aside>
  );
}

export default LeftSideBar;
