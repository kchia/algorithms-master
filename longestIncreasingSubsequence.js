/**
Given an unsorted array of integers, find the length of longest increasing subsequence.

For example,
Given [10, 9, 2, 5, 3, 7, 101, 18],
The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. 
Note that there may be more than one LIS combination, it is only necessary for you to return the length.

Your algorithm should run in O(n^2) complexity.

Time Complexity is O(n^2)
Space Complexity is O(n)
**/

var longestIncreasingSubsequence = function(arr) {

  if(!arr) return 0;

  var length = arr.length;

  // length of longest increasing subsequence in the array [0..i] including ith element
  var lisLength = [1];

  var maxLength = 1;

  for(var i = 1; i < length; i++) {

    lisLength[i] = 1;

    for(var j = 0; j < i; j++) {
      if(arr[i] > arr[j] && lisLength[i] < lisLength[j] + 1) {
        lisLength[i] = lisLength[j] + 1;
      }
    }    

    if(maxLength < lisLength[i]) {
      maxLength = lisLength[i];
    }
  }

  return maxLength;

};

/**
  Follow up: Could you improve it to O(n log n) time complexity?
  Space Complexity is O(n)
  Solution: Binary search and arrays

  APPEND IF GREATER: current > previous: append current if greater than previous
  REPLACE IF SMALLER: current <= previous: replace element >= current
**/

var longestIncreasingSubsequenceOptimized = function(arr) {

  // track the parent element of each subsequence
  var parents = [];

  var increasingSub = [];

  var length = 0;

  var low, mid, high, position;

  // binary search
  for(var i = 0; i < arr.length; i++) {
    low = 1;
    high = length;

    while(low <= high) {
      mid = Math.ceil((low + high) / 2);

      if(arr[increasingSub[mid]] < arr[i]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    position = low;

    parents[i] = increasingSub[position - 1];

    increasingSub[position] = i;

    if(position > length) {
      length = position;
    }
  }

  var longestIncreasingSubsequence = [];

  var k = increasingSub[length];

  for(var j = length - 1; j >= 0; j--) {
    longestIncreasingSubsequence[j] = arr[k];
    k = parents[k];
  }

  for(var k = 0; k < length; k++) {
    console.log(longestIncreasingSubsequence[k])
  }

};






