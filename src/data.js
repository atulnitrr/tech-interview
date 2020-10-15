const { Sum_3S, Sum_3TestCases, Sum_3P } = require("./problems/array/3Sum");
const {
  findMinP,
  findMinS,
  findMinTestCases,
} = require("./problems/array/findMin");

const allProblems = [
  {
    id: 1,
    type: "array",
    title: "find array",
    problem: findMinP,
    solution: findMinS,
    testcases: findMinTestCases,
  },
  {
    id: 2,
    type: "array",
    title: "find array value 444",
    problem: findMinP,
    solution: findMinS,
    testcases: findMinTestCases,
  },
  {
    id: 3,
    type: "array",
    title: "3sum",
    problem: Sum_3P,
    solution: Sum_3S,
    testcases: Sum_3TestCases,
  },
  {
    id: 4,
    type: "dp",
    title: "first dp problem",
    problem: Sum_3P,
    solution: Sum_3S,
    testcases: Sum_3TestCases,
  },
];

module.exports = allProblems;
