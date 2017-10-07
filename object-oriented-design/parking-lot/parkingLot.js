/**
QUESTIONS:
- What types of vehicles can it support?
- How many levels does the parking lot have?

USE CASES:
- The parking lot has multiple levels. Each level has multiple rows of spots.
- The parking lot can park motorcycles, cars, and buses.
- The parking lot has motorcycle spots, compact spots, and large spots.
- A motorcycle can park in any spot.
- A car can park in either a single compact spot or a single large spot.
- A bus can park in five large spots that are consecutive and within the same row. It cannot park in small
spots.

CORE OBJECTS: 
- ParkingLot
- Vehicle

RELATIONSHIPS:
- A parking lot can have many vehicles
- A vehicle can only be parked in one place at a time

ACTIONS:
- ParkingLot:
  - Should be able to park vehicles
  - Should be able to unpark vehicles
**/

var Level = require('./Level.js');

var ParkingLot = function(numLevels, numSpotsPerFloor) {

  // the use of an underscore prefix is just a coding convention 
  // and is not enforced by the language: there is nothing to prevent
  // a user from directly accessing a property that is supposed to be private.
  var _levels = [];
  var _numLevels = numLevels;

  for(var i = 0; i < _numLevels; i++) {
    _levels[i] = new Level(i, numSpotsPerFloor);
  }

};

ParkingLot.prototype.getLevels = function() {
  return this._levels;
};

// Park the vehicle in a spot (or multiple spots). Return false if failed.
ParkingLot.prototype.park = function(vehicle) {
  var levels = this.getLevels();
  for (var i = 0; i < levels.length; i++) {
    if (levels[i].parkVehicle(vehicle)) {
      return true;
    }
  }
  return false;
};



