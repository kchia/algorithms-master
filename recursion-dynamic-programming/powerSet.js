/**
  Write a method to return all subsets of a set.

  O(n^k)

**/
var powerSet = function(str){
  var set = new Set();
  var hash = {};

  if(!str) str = '';

  str = str.split('').sort();

  // remove duplicates
  for(var i = 0; i < str.length; i++) {
    if(str[i - 1] === str[i]) {
      str.splice(i, 1);
      i--;
    }
  }

  function recurse(strSet) {
    var joined = strSet.join('');

    //check if we have visited this combo
    if(hash[joined]) return;
    hash[joined] = true;

    set.add(joined);

    if(strSet.length === 1) return;

    // recurse all subsets
    var subSet;
    for(var i = 0; i < strSet.length; i++) {
      subSet = strSet.slice(0, i).concat(strSet.slice(i + 1));
      recurse(subSet);
    }
  }

  recurse(str);

  set.add('');

  return set;
};

/**
  Consider n = 0, n = 1, n = 2, n = 3

  O(n2^n)
**/

var powerSet = function(set) {
  var subsets = [];

  (function recurse(currSet, remainingSet) {
    subsets.push(currSet);
    for(var i = 0; i < remainingSet.length; i++) {
      recurse(currSet.concat([remainingSet[i]]), remainingSet.slice(i + 1));
    }
  })([], set);

  return subsets;
}



