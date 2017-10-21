/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
1 euro (100p)
2 euro (200p)
It is possible to make £2 in the following way:
1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?
example usage of `makeChange`:
// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/


var makeChange = function(total){
  var denominations = [1, 2, 5, 10, 20, 50, 100, 200];
  var output = 0;

  (function recurse (index, tot) {
    var currentDenomination = denominations[index];

    if(index === 0) {
      tot % currentDenomination === 0 && output++;
      return;
    }

    while(tot >= 0) {
      recurse(index - 1, tot);
      tot -= currentDenomination;
    }
  })(denominations.length-1, total);

  return output;

};


/**
  V2
  This works, but it's not as optimal as it could be. The issue is that we will be recursively calling 
  makeChange several times for the same values of amount and index.
**/

var denominations = [25, 10, 5, 1];

var makeChange = function(amount, denoms, index) {
  if(index >= denoms.length - 1) return 1;

  var denomAmount = denoms[index];
  var ways = 0;
  var amountRemaining;

  for(var i = 0; i * denomAmount <= amount; i++) {
    amountRemaining = amount - i * denomAmount;
    ways += makeChange(amountRemaining, denoms, index + 1);
  }

  return ways;
};

/**
  V3: TOP-DOWN APPROACH
**/

var makeChange = function(amount, denoms, index) {
  var memo = {};

  if(memo[amount][index]) {
    return memo[amount][index];
  }

  if(index >= denoms.length - 1) return 1 // one denom remaining

  var denomAmount = denoms[index];
  var ways = 0;
  var amountRemaining;

  for(var i = 0; i * denomAmount <= amount; i++) {
    // go to next denom, assuming i coins of denomAmount
    amountRemaining = amount - i * denomAmount;
    ways += makeChange(amountRemaining, denoms, index + 1, memo);
  }

  map[amount][index] = ways;

  return ways;
  
};

/* START SOLUTION */
/* MEMOIZED SOLUTION - INCREASED EFFICIENCY*/

var coins = [1, 2, 5, 10, 20, 50, 100, 200];
var takeWhile = function (arr, predicate) {
  var result = [];
  var i = 0;
  while (predicate(arr[i])) {
    result.push(arr[i++]);
  }
  return result;
};
var possibleChoices = function (total, max) {
  return takeWhile(coins, function (coin) {
    return total >= coin && coin <= max;
  });
};
var memoize = function (func, context) {
  var cache = {};
  return function () {
    if (!(JSON.stringify(arguments) in cache)) {
      cache[JSON.stringify(arguments)] = func.apply(context, arguments);
    }
    return cache[JSON.stringify(arguments)];
  };
};
var makeChange = memoize(function (total, last) {
  last = last || total;
  if (total === 0) {
    return 1;
  }
  var result = 0;
  var choices = possibleChoices(total, last);
  for (var i = 0; i < choices.length; i++) {
    var coin = choices[i];
    result += makeChange(total - coin, coin);
  }
  return result;
});

/* END SOLUTION */






