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