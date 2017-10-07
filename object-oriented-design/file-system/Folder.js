var Folder = function(type, name, filesAndFolders) {
  this._type = type || 'folder';
  this._name = name;
  this._filesAndFolders = filesAndFolders || [];
};

Folder.prototype.getType = function() {
  return this._type;
};

Folder.prototype.getName = function() {
  return this._name;
};

Folder.prototype.getFilesAndFolders = function() {
  return this._filesAndFolders;
};

Folder.prototype.findFolder = function(target) {
  var name = this.getName();
  if(name === target) {
    return this;
  } else {
    this.getFilesAndFolders().forEach(function(item) {
      if(item.type === 'folder') item.findFolder(target);
    });
  }
};

Folder.prototype.findFile = function(target) {
  var filesAndFolders = this.getFilesAndFolders();

  filesAndFolders.forEach(function(item) {
    if(item.type === 'file' && item.name === target) return item;

    if(item.type === 'folder') item.findFile(target);
  });
};

Folder.prototype.addFileOrFolder = function(fileOrFolder){
  this._filesAndFolders.push(fileOrFolder);
};
