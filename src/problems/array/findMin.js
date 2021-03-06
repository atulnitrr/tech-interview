export const findMinP = "Find min";
export const findMinS = `
package com.atul.lc.array;
public class KadaneAlgo {

    int maxSubaraySum(final int[] array) {
        int start = 0 , overallStart = 0, end = 0;
        int currentSum = array[0], maxSum = array[0];

        for (int i = 1; i < array.length; i++) {
            if (currentSum + array[i] < array[i]) {
                currentSum = array[i];
                start = i;
            } else {
                currentSum += array[i];
            }

            if (maxSum < currentSum) {
                maxSum = currentSum;
                overallStart = start;
                end = i;
            }

        }
        return maxSum;
    }
}
`;

export const findMinTestCases = [
  { id: 1, testCase: "case1", solution: "sol 1" },
  { id: 2, testCase: "case 2", solution: "sol 3" },
  { id: 3, testCase: "case 3", solution: " sol 3" },
];
