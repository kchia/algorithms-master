/**
Each recursive call adds a new layer to the stack, 
which means that if your algorithm recurses to a depth of n, it uses at least 0 (n) memory.
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