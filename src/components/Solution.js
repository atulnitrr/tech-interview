import React from "react";
import allProblems from "../data";

function Solution(props) {
  const { match } = props;
  const { problemid } = match.params;

  const currentProblem = allProblems.find(
    (problem) => Number.parseInt(problemid) === problem.id
  );
  console.log(currentProblem);
  if (currentProblem === undefined) {
    return <p>Not found</p>;
  }
  return (
    <div>
      <h3>soluton</h3>
      <h6>{JSON.stringify(match)}</h6>
      <p>{currentProblem.problem}</p>
      <pre>
        <code>{currentProblem.solution}</code>
      </pre>
      <h5>{problemid}</h5>
    </div>
  );
}

export default Solution;
