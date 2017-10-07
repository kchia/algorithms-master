var ParkingSpot = function(
  level,
  row,
  spotNumber,
  spotSize
) {

  var _level = level;
  var _row = row;
  var _spotNumber = spotNumber;
  var _spotSize = spotSize;

};

// Parking spot is available if it does not have a vehicle in it
ParkingSpot.prototype.isAvailable = function(vehicle) {
  return vehicle === null;
};

/* Checks if the spot is big enough for the vehicle (and is available). This compares
 * the SIZE only. It does not check if it has enough spots. */
ParkingSpot.prototype.canFitVehicle = function(vehicle) {
  return this.isAvailable() && vehicle.canFitInSpot(this);
};

/* Park vehicle in this spot. */
ParkingSpot.prototype.park = function(vehicle) {
  if(!canFitVehicle(vehicle)) return false;

  vehicle.parkInSpot(this);

  return true;

};

module.exports = ParkingSpot;