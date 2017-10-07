/**
  Simple Implementation
**/
var ParkingLot = function(spaces) {
  this.limit = spaces;
  this.number = 0;
  this.vehicles = {};
};

var Vehicle = function(type, name) {
  this.type = type;
  this.name = name;
};

ParkingLot.prototype.park = function(vehicle) {
  if(this.number <= this.limit) {
    if(this.vehicles[vehicle.name] !== undefined) {
      console.log(vehicle.name + ' is already parked inside!');
    } else {
      this.vehicles[vehicle.name] = vehicle;
      this.number++;
    }
  } else {
    console.log('This parking lot is full!');
  }
};

ParkingLot.prototype.exit = function(vehicle) {
  if(this.number === 0) {
    console.log('There are no cars in the parking lot.');
  } else if(this.vehicles[vehicle.name] === undefined) {
    console.log('The car is not in the parking lot');
  } else {
    delete this.vehicles[this.vehicle.name];
    this.number--;
  }
};

ParkingLot.prototype.isAvailable = function() {
  return this.number < this.limit;
};