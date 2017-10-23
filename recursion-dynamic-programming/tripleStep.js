/**
  Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 
  2 steps, or 3 steps at a time. Implement a method to count how many possible ways 
  the child can run up the stairs.

**/

// O(n^n)
function tripleStep(steps, stepOptions) {

  var ways = 0;

  (function recurse(stepsRemaining) {
    if(stepsRemaining < 0) {
    } else if(stepsRemaining === 0) {
      ways++;
    } else if(stepsRemaining > 0) {
      for(var i = 0; i < stepOptions.length; i++) {
        recurse(stepsRemaining - stepOptions[i]);
      }
    }
  
  })(steps);

  return ways;
}

function tripleStepMemoized(steps, stepOptions, memo = {}){
  // overstepped bounds
  if(steps < 0) {
    return 0;
  // exactly on last step
  } else if(steps === 0) {
    return 1;
  } else if(memo[steps]) {
    return memo[steps];
  } else {
    var result = 0;
    for(var i = 0; i < stepOptions.length; i++) {
      result += tripleStepMemoized(steps - stepOptions[i], stepOptions, memo);
    }
    memo[steps] = result; 
    return result;
  }
}