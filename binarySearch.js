/** 
  Iterative
  O(log n) time complexity and O(1) space  
**/
var binarySearch = function(array, target) {
  var floorIndex = -1;
  var ceilingIndex = array.length;
  var distance; 
  var guessIndex; 
  var guessValue; 

  while(floorIndex + 1 < ceilingIndex) {
    distance = Math.floor( (ceilingIndex - floorIndex) / 2 );
    guessIndex = floorIndex + distance;
    guessValue = array[guessIndex];

    if(guessValue === target) return guessIndex;

    if(guessValue > target) {
      ceilingIndex = guessIndex;
    } else {
      floorIndex = guessIndex;
    }
  }

  return -1;
};

/**
  Recursive
  O(log n) time and space complexities
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

/**
Given a sorted array with possibly duplicate elements, 
the task is to find indexes of first and last occurrences of an element x in the given array.

The Naive Approach is to run a for loop and check given elements in array.

1. Run a for loop and for i = 0 to n-1
2. Take first = -1 and last = -1 
3. When we find element first time then we update first = i 
4. We always update last=i whenever we find the element.
5. We print first and last.

O(n) time and O(1) space
**/

function firstOccurrence (arr, low, high, target) {
  var mid;
  if(high >= low) {
    mid = low + Math.floor((high - low)/2);
  }

  // if first occurrence is the first element in the array or...
  if(mid === 0 || target > arr[mid-1] && arr[mid] === target) {
    return mid;
  } else if(target > arr[mid]) {
    return firstOccurrence(arr, mid+1, high, target)
  } else {
    return firstOccurrence(arr, low, mid-1, target);
  }
  
  return -1;

}

function lastOccurrence (arr, low, high, target) {
  var mid;
  if(high >= low) {
    mid = low + Math.floor((high - low)/2);
  }

  // if last occurrence is the last element in the array
  if( mid === array.length - 1 || target < arr[mid+1] && arr[mid] === target) {
    return mid;
  } else if( target < arr[mid]) {
    return lastOccurrence(arr, low, (mid -1), target);
  } else {
    return lastOccurrence(arr, (mid + 1), high, target);      
  }

  return -1;
}










