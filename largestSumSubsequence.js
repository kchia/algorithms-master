/**
  Given an array of unordered positive and negative integers,
  find the maximum subarray sum in the array.
  For example:
  Array: {2, -9, 5, 1, -4, 6, 0, -7, 8}
  Output:
  Maximum subarray sum is 9
  Kadane's algorithm
  Time Complexity is O(n)
  Space Complexity is O(1)
**/

var largestSumSubsequence = function(arr) {
  var currentSum = 0;
  var maxSum = 0;
  var hasAllNegativeNumbers = true;
  var maxNegativeSum = 0;

  for(var i = 0; i < arr.length; i++) {

    if(hasAllNegativeNumbers && arr[i] >= 0) {
      hasAllNegativeNumbers = false;
    } else if(hasAllNegativeNumbers && arr[i] < 0 && maxNegativeSum < arr[i]){
      maxNegativeSum = arr[i];
    }

    currentSum += arr[i];

    if(currentSum < 0) {
      currentSum = 0;
    } else {
      if(maxSum < currentSum) {
        maxSum = currentSum
      }
    }

  }

  return maxSum;
};