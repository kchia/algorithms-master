Array.prototype.isSubsetOf = function(array) {
  var memo = {};

  for(var i = 0; i < array.length; i++) {
    memo[array[i]] = true;
  }

  for(var j = 0; j < this.length; j++) {
    if(!memo[this[j]]) return false;
  }

  return true;

};

/**
  O(n) time & space solution
**/