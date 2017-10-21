/**
  RECURSION
    - top-down, bottom-up, half-and-half approaches
    - Each recursive call adds a new layer to the stack, 
    which means that if your algorithm recurses to a depth of n, 
    it uses at least 0 (n) memory.
    - The total number of nodes in the tree will represent the runtime, 
    since each call only does 0(1) work outside of its recursive calls.
    Therefore, the number of calls is the runtime => O(2^n) runtime

    - We can use the earlier pattern we'd established for recursive calls: O( branches^depth). 
    There are 2 branches per call, and we go as deep as N, therefore the runtime is 0 (2^n) .
    (without memoization)
    - After memoization, O(n) runtime

This technique, called memoization, is a very common one to optimize exponential time recursive algo-
rithms.

The total number of nodes in the tree will represent the runtime, since each call only does 0(1) 
work outside of its recursive calls.Therefore, the number of calls is the runtime.

**/

/**
  TOP-DOWN DYNAMIC PROGRAMMING (MEMOIZATION)
**/
var fib = function(n) {
  var memo = {};

  var subroutine = function(int) {
    if(int < 2) return int;

    if(memo[int]) {
      return memo[int];
    } else {
      memo[int] = subroutine(int-1) + subroutine(int-2);
      return memo[int];
    }

  };

  return subroutine(n);

};

/**
  BOTTOM-UP DYNAMIC PROGRAMMING

  O(n) time complexity and O(1) space complexity
**/
var fib = function (n) {
  // TODO: implement me!
  /* START SOLUTION */
  // fast solution
  var fibs = [0, 1];

  while(n > 1) {
    fibs.push(fibs.shift() + fibs[0]);
    console.log(fibs);
    n--;
  }

  return fibs[n];
  /* END SOLUTION */
};

function calculateEvenSum (limit = 4000000) {
  let fibs = [0, 1];
  let lastFib = fibs[0];
  let sum = 0;
  while(lastFib < limit) {
    fibs.push(fibs.shift() + fibs[0]);
    lastFib = fibs[1];
    if(lastFib % 2 === 0 && lastFib < limit) sum += lastFib;
  }
  return sum;
}



