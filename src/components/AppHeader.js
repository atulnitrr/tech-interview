import React from "react";
import { useState } from "react";
import "./AppHeader.css";

function AppHeader({ setSearchTerm }) {
  const [localInput, setLoalInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(localInput);
  };
  return (
    <header className="app-header">
      <div>Tech Interview</div>

      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search for questions types e.g array, list "
            value={localInput}
            onChange={(e) => setLoalInput(e.target.value)}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>{" "}
      </div>
      <div className="pf-link-wrap">
        <a
          href="http://atulnitrr-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          myportfolio
        </a>
      </div>
    </header>
  );
}

export default AppHeader;
