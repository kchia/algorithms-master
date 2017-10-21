/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *  Given n by n grid, figure out how many paths the robot can take from top left corner to bottom right corner
 *  Simulate robot moving on board
 *  process branches exponentially
 *  simulate process recursively
 *  think at the node
 *  divide and conquer
 *  reduce to smaller version of same problem
 */

var makeBoard = function(n) {
  var board = [];

  for(var i = 0; i < n; i++) {
    board.push([false]);
  }

  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };

  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };

  return board;
};

var robotPaths = function(n, board, i, j) {
  if(!board) {
    board = makeBoard(n);
    i = 0;
    j = 0;
  }

  // No path if you are off the board or on a piece
  // you shouldn't be on
  if(!(i >= 0 && i < n && j >= 0 && j < n) || board.hasBeenVisited(i, j)) {
    return 0;
  }

  // One possible path if you are at the end point
  if(i === n - 1 && j === n - 1) return 1;

  board.togglePiece(i, j);

  var result = robotPaths(n, board, i, j+1) +
    robotPaths(n, board, i, j-1) +
    robotPaths(n, board, i+1, j) +
    robotPaths(n, board, i-1, j);

    // !!Return the board to its original state!!
    // Toggling the piece back to its original state
    // is vital to this solution, as it allows the
    // algorithm to 'backtrack' from this position for
    // subsequent recursive calls.
  board.togglePiece(i, j);
  return result;
};

/**
Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns. 
The robot can only move in two directions, right and down, but 
certain cells are "off limits" such that the robot cannot step on them. 
Design an algorithm to find a path for the robot from the top left to the bottom right.
**/
var findRobotPaths = function(grid) {
  var paths = [];
  var endRow = grid.length - 1;
  var endCol = grid[0].length - 1;

  var subroutine = function(row, col, currentPath) {
    if(row === endRow && col === endCol) {
      // robot has reached the end of the grid
      paths.push(currentPath.push([row, col]));
    } else if(row <= endRow && col <= endCol) {
      // robot moves down
      if(row < endRow && grid[row+1][col] !== 0) {
        subroutine(row+1, col, currentPath.concat([[row, col]]));
      }

      // robot moves right
      if(col < endCol && grid[row][col+1] !== 0) {
        subroutine(row, col+1, currentPath.concat([[row, col]]));
      }
    }
  };

  subroutine(0, 0, []);

  return paths;  

};

var grid = [
  [1, 1, 1, 1],
  [1, 0, 1, 0],
  [0, 1, 1, 1],
];




