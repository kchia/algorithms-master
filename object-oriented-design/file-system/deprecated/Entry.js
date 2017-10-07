var Entry = function(name, parent) {
  this._name = name;
  this._parent = parent;
  this._created = new Date();
  this._lastUpdated;
  this._lastAccessed;
};

Entry.prototype.getParent = function() {
  return this._parent;
};

Entry.prototype.getName = function() {
  return this._name;
};

Entry.prototype.changeName = function(newName) {
  this._name = newName;
};

Entry.prototype.getCreationTime = function() {
  return this._created;
};

Entry.prototype.getLastUpdated = function() {
  return this._lastUpdated;
};

Entry.prototype.getLastAccessed = function() {
  return this._lastAccessed;
};

Entry.prototype.delete = function() {
  var parent = this.getParent();
  if(parent === null) {
    return false;
  }
  return parent.deleteEntry(this);
};

Entry.prototype.getFullPath = function() {
  var parent = this.getParent();
  var name = this.getName();

  if(parent === null) {
    return this.getName();
  } else {
    return parent.getFullPath() + '/' + name;
  }
};

module.exports = Entry;