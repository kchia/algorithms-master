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
**/
var fib = function (n) {
  // TODO: implement me!
  /* START SOLUTION */
  // fast solution
  var fibs = [0, 1];
  for(; n > 1; n--) {
    console.log(fibs);
    fibs.push(fibs.shift() + fibs[0]);
  }
  return fibs[n];
  /* END SOLUTION */
};

