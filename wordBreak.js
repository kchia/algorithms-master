/**
  Given an input string and a dictionary of words,
  segment the input string into a space-separated
  sequence of dictionary words if possible. For
  example, if the input string is "applepie" and
  dictionary contains a standard set of English words,
  then we would return the string "apple pie" as output.

  EDGE CASES:
  - What if the input string is already a word in the
   dictionary? A single word is a special case of a space-separated
   sequence of words.
  - Should I only consider segmentations into two words?
  - What if the input string cannot be segmented into a
   sequence of words in the dictionary? Then return null.
  - What about stemming, spelling correction, etc.? 
  Just segment the exact input string into a sequence of exact words in the dictionary.  
  - What if there are multiple valid segmentations?
  Just return any valid segmentation if there is one.
  - What operations does the dictionary support?
  Exact string lookup. That's all you need.
  - How big is the dictionary? 
  Assume it's much bigger than the input string,
   but that it fits in memory.

   Given a dictionary of words and a string of characters, find if the string of characters can be broken into individual valid words from the dictionary.
   Example: 
   Dictionary: arrays, dynamic, heaps, IDeserve, learn, learning, linked, list, platform, programming, stacks, trees
   String    : IDeservelearningplatform
   Output   : true 
   Because the string can be broken into valid words: IDeserve learning platform

   Time complexity: O(n^2)
   Space complexity: O(n)
**/

/**
  Iterative Solution
**/
var dictionary = {
  'i' : true, 
  'deserve': true, 
  'learning': true
};

var dictionaryContains = function(word, dict) {
  return dict[word];
};

var wordBreak = function(words, dict) {

  if(!words) return true;

  var validWords = new Set();

  var length = words.length;

  var prefix, suffix;

  for(var i = 0; i < length; i++) {

    prefix = words.substr(0, i + 1);

    if(dictionaryContains(prefix, dict)) {
      validWords.add(prefix);
    }

    // end of the array
    if(validWords.has(prefix) && ( i === length - 1)) {
      return true;
    }

    // still iterating through the array
    if(validWords.has(prefix)) {
      for(var j = i + 1; j < length; j++) {

        suffix = words.substr(i + 1, j + 1);

        if(dictionaryContains(suffix, dict)) {
          validWords.add(suffix);
        }

        if(validWords.has(suffix) && j === length - 1) {
          return true;
        }
      }
    }
  }

  return false;
};

/**
  Recursive Solution
  Time complexity: Exponential runtime
**/

var dictionary = {
  'i' : true, 
  'deserve': true, 
  'learning': true
};

var dictionaryContains = function(word, dict) {
  return dict[word];
};

var wordBreakRecursive = function(words, dict) {
  if(dictionaryContains(words, dict)) return words;

  var length = words.length;

  var prefix, suffix, segmentSuffix;

  for(var i = 0; i < length; i++) {
    prefix = words.substr(0, i);

    if(dictionaryContains(prefix, dict)) {
      suffix = words.substr(i, length);
      segmentSuffix = wordBreakRecursive(suffix, dict);
      if(typeof segmentSuffix !== 'undefined') {
        return prefix + ' ' + segmentSuffix;
      }
    }
  }

  return null;

};

/**
  Recursive with Memoization
**/

var wordBreakRecursiveOptimized = function(words, dict) {

  var memo = {};

  var subroutine = function(words, dict) {
    if(memo[words]) return memo[words];

    if(dictionaryContains(words, dict)) return words;

    var length = words.length;

    var prefix, suffix, segmentSuffix;

    for(var i = 0; i < length; i++) {
      prefix = words.substr(0, i);

      if(dictionaryContains(prefix, dict)) {

        suffix = words.substr(i, length);
        segmentSuffix = subroutine(suffix, dict);

        if(typeof segmentSuffix !== 'undefined') {
          memo[words] = prefix + ' ' + segmentSuffix;
          return prefix + ' ' + segmentSuffix;
        }

      }
    }

    return null;
  }

  return subroutine(words, dict);
};






