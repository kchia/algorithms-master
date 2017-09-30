var removeDuplicates = function(array) {
  var memo = {};

  var result = [];

  var element;

  for(var i = 0; i < array.length; i++) {
    element = array[i];
    if(!memo[element]) {
      result.push(element);
      memo[element] = true;
    }
  }

  return result;
}