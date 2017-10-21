/**
  Permutations without Dups: Write a method to compute all permutations of a string of unique characters.
**/

var permuteWithDups = function(str) {
  var results = [];

  (function recurse(currentPerm, remainingChars) {
      if(remainingChars.length === 0) results.push(currentPerm);

      for(var i = 0; i < remainingChars.length; i++) {
        recurse(currentPerm + remainingChars.charAt(i), remainingChars.slice(0, i) + remainingChars.slice(i + 1))
      }
  })('', str);

  return results;
};
