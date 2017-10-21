/**
Each recursive call adds a new layer to the stack, 
which means that if your algorithm recurses to a depth of n, it uses at least 0 (n) memory.
O(n) time complexity because it executes once every time it decrements the value n, 
and it decrements the value n until it reaches 0, meaning the function is called recursively n times. 

**/

var factorialCache = function(n) {

  var cache = {};

  var subroutine = function(input) {

    if (input === 1) return 1;

    if(cache[input]) {
      return cache[input];
    } 

    var result = cache[input] = input * subroutine(input - 1);

    return result;
  };

  return subroutine(n);
};