/** 
  Iterative  
**/
var binarySearch = function(array, target) {
  var floorIndex = -1;
  var ceilingIndex = array.length;
  var distance; 
  var halfDistance; 
  var guessIndex; 
  var guessValue; 

  while(floorIndex + 1 < ceilingIndex) {
    distance = ceilingIndex - floorIndex;
    halfDistance = distance / 2;
    guessIndex = floorIndex + halfDistance;
    guessValue = array[guessIndex];

    if(guessValue === target) return guessIndex;

    if(guessValue > target) {
      ceilingIndex = guessIndex;
    } else {
      floorIndex = guessIndex;
    }
  }

  return false;
};

/**
  Recursive
**/
var binarySearch = function(array, target) {

  var subroutine = function(low, high) {
    if(low === high) return null;

    var mid = Math.floor((high - low) / 2) + low;

    if(array[mid] === target) {
      return mid; 
    } else if (array[mid] > target) {
      return subroutine(low, mid);
    } else {
      return subroutine(mid, high);
    }
  };

  return subroutine(0, array.length);

};