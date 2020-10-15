export const Sum_3P = `Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.`;
export const Sum_3S = `class Solution {
  public List<List<Integer>> threeSum(int[] nums) {
      
              List<List<Integer>> result = new ArrayList<>();

      Arrays.sort(nums);
      for (int i = 0; i < nums.length - 2 ; i++) {
          if (i == 0 || nums[i] != nums[i - 1]) {
              int start = i + 1;
              int end = nums.length -1;
              while (start < end) {
                  if (nums[i] + nums[start] + nums[end] == 0) {
                     result.add(Arrays.asList(nums[i], nums[start] , nums[end]));
                     while (start < end && nums[start] == nums[start+1]) start++;
                     while (start < end && nums[end] == nums[end-1])end--;
                      start++;
                      end--;
                  } else if (nums[start] + nums[end] > - nums[i]) {
                      end--;
                  } else {
                      start++;
                  }
              }
          }
      }
      return result;    
  }
}`;
export const Sum_3TestCases = [
  { id: 1, testCase: "[-1,0,1,2,-1,-4]", solution: "[[-1,-1,2],[-1,0,1]]" },
  { id: 2, testCase: "[]", solution: "[]" },
  { id: 3, testCase: "case 3", solution: " sol 3" },
];
