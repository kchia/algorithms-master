/**
  O(n) time complexity, O(n) space complexity
**/

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

/**
  O(nlgn) time complexity, O(1) space complexity
**/
function findRepeat(theArray) {

  var floor = 1;
  var ceiling = theArray.length - 1;

  while (floor < ceiling) {

    // divide our range 1..n into an upper range and lower range
    // (such that they don't overlap)
    // lower range is floor..midpoint
    // upper range is midpoint+1..ceiling
    var midpoint = Math.floor(floor + ((ceiling - floor) / 2));
    var lowerRangeFloor   = floor;
    var lowerRangeCeiling = midpoint;
    var upperRangeFloor   = midpoint + 1;
    var upperRangeCeiling = ceiling;

    var distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;

    // count number of items in lower range
    var itemsInLowerRange = 0;
    theArray.forEach(function(item) {

      // is it in the lower range?
      if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        itemsInLowerRange += 1;
      }
    });

    if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {

      // there must be a duplicate in the lower range
      // so use the same approach iteratively on that range
      floor   = lowerRangeFloor;
      ceiling = lowerRangeCeiling;
    } else {

      // there must be a duplicate in the upper range
      // so use the same approach iteratively on that range
      floor   = upperRangeFloor;
      ceiling = upperRangeCeiling;
    }
  }

  // floor and ceiling have converged
  // we found a number that repeats!
  return floor;
}