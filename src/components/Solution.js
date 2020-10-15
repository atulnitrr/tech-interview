import React from "react";
import allProblems from "../data";
import "./Solution.css";

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
  const { testcases } = currentProblem;
  return (
    <div className="solution-w">
      <div className="question-w">
        <p>
          {" "}
          <strong>Problem: </strong> {currentProblem.problem}
        </p>
        <p>
          <strong>Solution: </strong>
        </p>
      </div>

      <div className="solution-code-w">
        <pre>
          <code>{currentProblem.solution}</code>
        </pre>
      </div>

      <div className="test-case-w">
        {testcases.map((tc) => {
          const { id, testCase, solution } = tc;
          return (
            <div key={id} className="single-test-case">
              <p>
                <strong>Input:</strong> {testCase}
              </p>
              <p>
                {" "}
                <strong>Output: </strong> {solution}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Solution;
