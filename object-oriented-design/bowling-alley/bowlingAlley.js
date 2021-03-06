/**
  Define use cases/rules:
  - The bowling alley has 10 pins
  - The bowling alley can support multiple players
  - The winning player is the player with the most number of pins
  - A game consists of 10 frames; each player completes each frame in turn
  - If the player knocks down 10 pins with first ball, they are awarded a strike
  - if knock down all 10 pins on second ball, then it's a spare
  - The bowler is allowed to throw two extra balls for achieving a strike in the 
  tenth frame, or one extra ball for achieving a spare. This allows for a potential
  of 12 strikes in a single game, and a maximum score of 300 points, a perfect game.
  - When all ten pins are knocked down with the first ball (called a strike and 
  typically rendered as an "X" on a scoresheet), a player is awarded ten points, 
  plus a bonus of whatever is scored with the next two balls. 
  In this way, the points scored for the two balls after the strike are counted twice.
  - Can scores be negative?
  - What to do in tie situations?


  Define core objects:
  - BowlingAlley
  - Player
  - Game

  Analyze relationships between core objects:
  - A BowlingAlley can have 1 Game at any one point in time
  - A Game can have many Players.

  Investigate actions:
  - 

**/

function BowlingAlley (players, maxPins, maxFrames) {
  this._players = players;
  this._scoreboard = {};
  this._maxFrames = maxFrames || 10;
  this._maxPins = this._strike = maxPins || 10;

  let player;
  // initialize player scores to 0;
  for(let i = 0; i < players.length; i++) {
    player = players[i];
    this.updateScore(player);
  }
}

BowlingAlley.prototype.initialize = function() {
  const players = this.getPlayers();
  let currentFrame = 1;
  let player;

  while(currentFrame <= this._maxFrames) {
    console.log('Currently playing frame:' + currentFrame);
    for(let i = 0; i < players.length; i++) {
      player = players[i];
      player.play();
      this.updateScore(player);
    }
    currentFrame++;
  }

  this.identifyWinner();
};

BowlingAlley.prototype.getPlayers = function() {
  return this._players;
};

BowlingAlley.prototype.identifyWinner = function() {
  const players = this.getPlayers();
  let highestScore = 0;
  let score;
  let winners = [];
  let player;

  for(let i = 0; i < players.length; i++) {
    player = players[i];
    score = player.getScore();
    if(score > highestScore) {
      highestScore = score;
      winners.push(player);
    } else {
      if(score === highestScore) {
        winners.push(player);
      }
    }

  }

  // return tied winners;
  console.log(winners);
};

BowlingAlley.prototype.updateScore = function(player) {
  let score = player.getScore();

  this._scoreboard[player.getName()] = score;
  console.log('The current scoreboard is: ' + JSON.stringify(this._scoreboard));

};

function Player(name) {
  this._name = name;
  this._totalScore = 0;
};

Player.prototype.getName = function() {
  return this._name;
};

Player.prototype.getScore = function() {
  return this._totalScore;
};

Player.prototype.incrementScore = function(size) {
  this._totalScore += size;
};

Player.prototype.play = function(game) {

  let name = this.getName();

  let score;

  for(let i = 0; i < 2; i++) {
    score = Math.floor(Math.random() * 10) + 1;  
    console.log(name + ' scored a ' + score);

    if(score === 10) {

      // hitting a 10 on first ball
      if(i === 0) {
        console.log(name + ' got a strike!');
      } else {
        // hitting a 10 on second ball
        console.log(name + ' got a spare!');
      }

    }

    this.incrementScore(score);
  }

};

const players = [
  new Player('Adam'),
  new Player('Hou'),
  new Player('Sally'),
  new Player('Moony'),
  new Player('ny'),
  new Player('Lucy'),
  new Player('Sandy'),
  new Player('Tony'),
];

let game = new BowlingAlley(players);

game.initialize();










