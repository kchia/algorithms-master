/**
  Define use cases:
  - The elevator should be able to load and unload passengers
  - The elevator should keep track of the floor it's on: Floors < 0 represent the basement, with a max up to m floors and min of n floors
  - The elevator should be able to go up/down
  - The elevator should be able to stop in case of a failure
  - The elevator should alert passengers if capacity is exceeded
  - The elevator should be able to get to passenger specified floor
  - The elevator should return to the ground floor if empty
  - 


  Define core objects:
  - Elevator
  - Passenger

  Analyze relationships between core objects:
  - 

  Investigate actions:
  -

**/

// Review Node EventEmitter
// - What are events?
//   - UI actions: click, scroll, keydown
//   - File I/O: open, close
// - EventEmitter is a native node library
// - used for communication between programs
// - Emitters - .emit(), async 
//   - all listeners triggered
// - Listeners - attach .on() to an object instance
// - Using events - .removeListener(); remove listener when event is not needed
// anymore to free up memory resources; good programming practice

// */
var EventEmitter = require('events');

function Passenger (name, desiredFloor) {
  this.name = name;
  this.desiredFloor = desiredFloor;  
}

function Elevator (currentPassenger, currentFloor) {

  this.currentPassenger = currentPassenger || {};
  this.currentFloor = currentFloor || 0;

}

// Elevator now has all the traits of EventEmitter
Elevator.prototype = new EventEmitter();

Elevator.prototype.loadPassenger = function(passenger) {
  console.log(`Loading passenger ${passenger.name} at floor ${this.currentFloor}`);
  this.currentPassenger = passenger;
  this.emit('up');
};

Elevator.prototype.unloadPassenger = function() {
  console.log(`Unloading ${this.currentPassenger.name} at floor ${this.currentFloor}`);
  this.currentPassenger = {};
  this.emit('down');
};

Elevator.prototype.goUp = function() {
  console.log(`Elevator taking ${this.currentPassenger.name} up, currently at floor ${this.currentFloor}`);
  // we can assume there's no max floor
  this.currentFloor++;

};

Elevator.prototype.goDown = function() {
  console.log(`Elevator going down, currently at floor ${this.currentFloor}`);
  // we can assume a negative floor leads to basement
  this.currentFloor--;
};

var elevator = new Elevator();

var goUpListener = function() {

  setTimeout(function() {
    // keep going up until we reach the desired floor
    if(elevator.currentFloor !== elevator.currentPassenger.desiredFloor) {

      this.goUp();

      this.emit('up');

    } else {

      this.unloadPassenger();

    }

  }.bind(elevator), 1000);
};

var goDownListener = function() {

  setTimeout(function() {
    if(elevator.currentFloor !== 0) {

      // keep going down until we reach the lobby
      elevator.goDown();

      elevator.emit('down');

    } else {

      // we are in the lobby
      var nextPassenger = passengers.pop();

      if(nextPassenger) {
        elevator.loadPassenger(nextPassenger);
      } else {
        console.log(`No more passengers. We are back at floor ${elevator.currentFloor}`);
        elevator.removeListener('up', goUpListener);
        elevator.removeListener('down', goDownListener);
      }
      
    }

  }.bind(elevator), 1000);

};

var passengers = [
  {
    name: 'John',
    desiredFloor: 3
  },
  {
    name: 'Sally',
    desiredFloor: 4
  },
  {
    name: 'David',
    desiredFloor: 8
  }
];

// first argument is the event, second argument is the listener function
elevator.on('up', goUpListener);
elevator.on('down', goDownListener);

// let's kick off the process by loading a passenger
elevator.loadPassenger(passengers.pop());

