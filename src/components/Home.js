import React from "react";
import { Route, Link } from "react-router-dom";
import allProblems from "../data";

function Home(props) {
  return (
    <div>
      <h3>Home js</h3>
      {allProblems.map((problem) => {
        const { id, title } = problem;
        return (
          <div key={id}>
            <Link to={`/${id}`} target="_blank">
              {title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
