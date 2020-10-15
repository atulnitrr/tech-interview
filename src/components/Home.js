import React from "react";
import { Link } from "react-router-dom";
import allProblems from "../data";
import "./Home.css";

function Home(props) {
  return (
    <div className="home-w">
      {allProblems.map((problem) => {
        const { id, title, type } = problem;
        return (
          <div key={id}>
            <>
              <Link to={`/${id}`} target="_blank">
                {title} <em>({type})</em>
              </Link>
            </>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
