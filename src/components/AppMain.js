import React from "react";

function AppMain({ children }) {
  return (
    <div className="app-main">
      <main className="app-main">{children}</main>
    </div>
  );
}

export default AppMain;
