var ParkingSpot = require('./ParkingSpot.js');
var vehicleSizes = require('./constants');

var Level = function(
  floor, 
  numberSpots,
  spotsPerRow
  ) {
  var _floor = floor;
  var _numberSpots = numberSpots;
  // number of free spots
  var _spotsPerRow = spotsPerRow || 10;

  var _spots = [];
  var _largeSpots = _numberSpots / 4;
  var _motorcycleSpots = _numberSpots / 4;
  var _compactSpots = _numberSpots - _largeSpots - _compactSpots;
  var row;

  var _spotSize = vehicleSizes.MOTORCYCLE;
  for(var i = 0; i < _numberSpots; i++) {
    if(i < _largeSpots){
      _spotSize = vehicleSizes.LARGE;
    } else if( i < _largeSpots + _compactSpots ) {
      _spotSize = vehicleSizes.COMPACT;
    }

    row = i / _spotsPerRow;
    spots[i] = new ParkingSpot(this, row, i, _spotSize);
  }

  var _availableSpots = _numberSpots || 0;

};

Level.prototype.getSpots = function(){
  return this._spots;
};

Level.prototype.getAvailableSpots = function() {
  return this._availableSpots;
};

Level.prototype.setAvailableSpots = function(isParking, spotsNeeded) {
  if(isParking) {
    this._availableSpots -= spotsNeeded;
  } else {
    this._availableSpots += spotsNeeded;
  }
};

// Find a spot to park this vehicle. 
// Return index of spot, or -1 on failure.
Level.prototype.findAvailableSpots = function(vehicle) {
  var spotsNeeded = vehicle.getSpotsNeeded();
  var lastRow = -1;
  var spotsFound = 0;
  var spots = this.getSpots();
  var spot;

  for (var i = 0; i < spots.length; i++) {
    spot = spots[i];
    if(lastRow !== spot.getRow()) {
      spotsFound = 0;
      lastRow = spot.getRow();
    }

    if(spot.canFitVehicle(vehicle)) {
      spotsFound++;
    } else {
      spotsFound = 0;
    }

    if(spotsFound === spotsNeeded) {
      return i - (spotsNeeded - 1);
    }
  }

  return -1;
};

// Park a vehicle starting at the spot spotNumber, 
// and continuing until * vehicle.spotsNeeded.
Level.prototype.parkStartingAtSpot = function(spotNumber, vehicle) {

  var spots = this.getSpots();
  var spotsNeeded = vehicle.getSpotsNeeded();

  vehicle.clearSpots(spots);

  for(var i = spotNumber; i < spotNumber + spotsNeeded; i++){
    spots[i].park(vehicle); 
  }

  this.setAvailableSpots(true, vehicle.spotsNeeded);

};

//Find a place to park this vehicle. Return false if failed.
Level.prototype.parkVehicle = function(vehicle) {
  if(this.getAvailableSpots() < vehicle.getSpotsNeeded()) {
    return false;
  }
  var spotNumber = this.findAvailableSpots();

  if(spotNumber < 0) return false;

  return parkStartingAtSpot(spotNumber, vehicle);
};

Level.prototype.spotFreed = function() {
  this.setAvailableSpots(false, 1);
};

module.exports = Level;