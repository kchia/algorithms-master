/**
  Permutations with Dups: Write a method to compute all permutations of a string whose charac-
  ters are not necessarily unique. The list of permutations should not have duplicates.

  Use the BASE CASE & BUILD approach
**/

var permuteWithoutDups = function(string) {
  var results = [];
  var usedChars = new Set();

  (function recurse(currentPerm, remainingChars){
    if(remainingChars.length === 0) results.push(currentPerm);

    for(var i = 0; i < remainingChars.length; i++) {
      if(!usedChars.has(remainingChars.charAt(i))) {
        usedChars.add(remainingChars.charAt(i)));
        recurse(currentPerm + remainingChars.charAt(i),remainingChars.slice(0, i) + remainingChars.slice(i+1));
      }
    }
  })('', string);

  return results;
};