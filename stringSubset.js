/**
  O(n) time & space solution
  can also add to a set
**/

Array.prototype.isSubsetOf = function(array) {

  if(typeof array === 'undefined' || !array || array.length === 0) return false;
  
  var memo = {};

  for(var i = 0; i < array.length; i++) {
    memo[array[i]] = true;
  }

  for(var j = 0; j < this.length; j++) {
    if(!memo[this[j]]) return false;
  }

  return true;

};

