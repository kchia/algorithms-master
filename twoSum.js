/**

SORTED TWO SUM

Given a sorted array of integers and a target, return a 
pair of indices where the corresponding values in the array add up to the target.  
Input: Sorted Array of Integers, 
Target Integer Output: Two element Array of Integers

Input: [-5, 1, 3, 6, 7], -2      => Output: [0,2]
Input: [1, 9, 10], 8      =>  Output: [-1,-1]

Time Complexity: O(N) Auxiliary 

Space Complexity: O(1)
  May not use a hash to store values because that breaks the space complexity.
**/

var sortedTwoSum = function(array, target) {
  var i = 0;
  var j = array.length - 1;
  var sum = array[i] + array[j];

  while(i < j && sum !== target) {
    if(sum < target) {
      i++;
    }

    if(sum > target) {
      j--;
    }

    sum = array[i] + array[j];
  }

  return sum !== target ? [-1, -1] : [i, j];
};

/**
  TWO SUM
  Time Complexity: O(N)
  Auxiliary Space Complexity: O(N)
  If the target integer is not found return [-1, -1].
  Values of the array can be positive or negative integers.

  The naive solution is O(N 2 ) time which takes every possible pair and compares the sum to
  the target value, however only uses O(1) space. This solution takes only O(N) time but
  increases the space to O(N) as well.

  twoSum([1, 6, -5, 7, 3], -2)
**/

var twoSum = function(array, target) {
  var memo = {};

  var element;
  var diff;

  for(var i = 0; i < array.length; i++) {
    element = array[i];
    diff = target - element;

    if(!memo[element]) {
      memo[diff] = i;
    } else {
      return [memo[element], i];
    }
  }

  return [-1, -1];
};

/**
  SUBARRAY SUM
  Given an array of positive integers and a target value, return true if there is a subarray of
  consecutive elements that sum up to this target value.
  Input: Array of integers, target value
  Output: Boolean

  Example
  Input: [6,12,1,7,5,2,3], 14 =&gt; Output: true (7+5+2)
  Input: [8,3,7,9,10,1,13], 50 =&gt; Output: false

  Constraints
  Time Complexity: O(N)
  Auxiliary Space Complexity: O(1)
  All elements are positive
**/

var subarraySum = function(array, target) {
  var currentSum = array[0];

  var start = 0;

  for(var i = 1; i < array.length; i++) {
    currentSum += array[i];

    if(currentSum > target) {
      while(currentSum > target) {
        currentSum -= array[start];
        start++;
      }
    }

    if(currentSum === target) return true;
  }

  return false;
};





