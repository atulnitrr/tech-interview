import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import allProblems from "../data";
import "./Home.css";

function Home(props) {
  const { searchTerm } = props;

  const [currentProblems, setCurrentProblem] = useState(allProblems);

  useEffect(() => {
    if (searchTerm !== undefined && searchTerm.trim().length !== 0) {
      setCurrentProblem(
        allProblems.filter((problem) => {
          return (
            problem.type.toLowerCase() === searchTerm.toLowerCase() ||
            problem.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        })
      );
    } else {
      setCurrentProblem(allProblems);
    }
  }, [searchTerm]);

  return (
    <div className="home-w">
      {currentProblems.length === 0 ? (
        <p>No result found</p>
      ) : (
        currentProblems.map((problem) => {
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
        })
      )}
    </div>
  );
}

export default Home;
