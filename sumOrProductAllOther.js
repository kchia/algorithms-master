var findProductOfAllOthersExceptAt = function(array) {
  if(array.length < 2) {
    throw new Error('You need at least 2 numbers in your input array');
  }

  var result = [];

  // at each index, compute products of all integers before the index
  var productSoFar = 1;
  for(var i = 0; i < array.length; i++) {
    result[i] = productSoFar;
    productSoFar *= array[i];
  }

  console.log(result);
  // at each index, compute products of all integers after the index
  productSoFar = 1
  for(var j = array.length - 1; j >= 0; j--) {
    result[j] *= productSoFar;
    productSoFar *= array[j];
  }

  return result;
};
