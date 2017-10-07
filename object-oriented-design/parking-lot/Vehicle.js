var Vehicle = function(type, size, spotsNeeded, license) {
  // can accommodate 'car', 'bus', or 'motorcycle'
  this._type = type;
  this._size = size;
  this._spotsNeeded = spotsNeeded;
  this._license = license;
};

Vehicle.prototype.getType = function() {
  return this._type;
};

Vehicle.prototype.getSize = function() {
  return this._size;
};

Vehicle.prototype.getSpotsNeeded = function() {
  return this._spotsNeeded;
}

Vehicle.prototype.canFitInSpot = function(spot) {
  return this.vehicle.getSize() <= spot.getSize(); 
};

Vehicle.prototype.parkInSpot = function(parkingSpots, spot) {
  return parkingSpots.add(spot);
};

Vehicle.prototype.clearSpots = function(parkingSpots) {
  for(var i = 0; i < parkingSpots.getSize(); i++) {
    parkingSpots.get(i).removeVehicle();
  }

  parkingSpots.clear();
};



