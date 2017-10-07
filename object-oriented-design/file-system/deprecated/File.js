var Entry = require('./Entry.js');

var File = function(name, parent, size, contents) {
  this._size = size;
  this._contents = contents;

  Entry.apply(this, arguments);
};

File.prototype.getSize = function() {
  return this._size;
};

File.prototype.getContents = function() {
  return this._contents;
};

File.prototype.setContents = function(contents) {
  this._contents = contents;
};