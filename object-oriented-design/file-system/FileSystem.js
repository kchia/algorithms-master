var FileSystem = function(name) {
  this._folder = new Folder(name);
  this._currentFolder = null;
  this._currentFile = null;
  this.index = {};
};

FileSystem.prototype.getFolder = function() {
  return this._folder;
};

FileSystem.prototype.getCurrentFolder = function() {
  if(this._currentFolder) {
    return this._currentFolder;
  }

  console.log('no folder');
};

FileSystem.prototype.setCurrentFolder = function(folder) {
  this._currentFolder = folder;
};

FileSystem.prototype.getCurrentFile = function() {
  if(this._currentFile) {
    return this._currentFile;
  }
  console.log('no file');
};

FileSystem.prototype.setCurrentFile = function(file) {
  this._currentFile = file;
};

FileSystem.prototype.findFolder = function(target) {
  var found = this.getFolder().findFolder(target);
  this.setCurrentFolder(found);
  return found;
};

FileSystem.prototype.findFile = function() {
  var found = this.getFolder().findFile(target);
  this.setCurrentFile(found);
  return found;
};

FileSystem.prototype.addFileToCurrentFolder = function(name, content) {
  this.getCurrentFolder().addFileOrFolder(new File(name, content));
};

FileSystem.prototype.addFolderToCurrent = function(name) {
  this.getCurrentFolder().addFileOrFolder(new Folder(name));
};

FileSystem.prototype.deleteCurrentFolder = function() {
// delete from parent
};

FileSystem.prototype.deleteCurrentFile = function() {
// delete from parent
};
