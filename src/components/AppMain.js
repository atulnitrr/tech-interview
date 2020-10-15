import React from "react";

function AppMain({ children }) {
  return (
    <div>
      <main className="app-main">{children}</main>
    </div>
  );
}

export default AppMain;
