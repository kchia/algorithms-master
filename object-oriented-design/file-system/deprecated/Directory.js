var Entry = require('./Entry.js');

var Directory = function(name, parent, contents) {
  Entry.apply(this, arguments);

  this._contents = contents || [];

};

Directory.prototype.getContents = function() {
  return this._contents;
};

Directory.prototype.setContents = function(entry) {
  this._contents.push(entry);
};

Directory.prototype.getSize = function() {
  var size = 0;
  for(var i = 0; i < contents)

};

Directory.prototype.getNumberOfFiles = function() {

};

Directory.prototype.deleteEntry = function(entry) {
  var entries = this.getContents();
  for(var i = 0; i < entries.length; i++) {
    if(entries[i] === entry) delete entries[i];
  }
};

Directory.prototype.addEntry = function(entry) {
  this.setContents(entry);
};

