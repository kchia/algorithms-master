var File = function(type, name, contents) {
  this._type = type || 'file';
  this._name = name;
  this._contents = contents || null;
};

File.prototype.getType = function() {
  return this._type;
};

File.prototype.getName = function() {
  return this._name;
};

File.prototype.getContents = function() {
  return this._contents;
};