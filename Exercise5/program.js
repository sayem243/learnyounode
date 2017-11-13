var fs = require('fs');
var path = require('path');

var folder = process.argv[3];
var txt = '.' + process.argv[4];

fs.readdir(folder, function (err, files) {
  if (err) 
    return console.error(err);
  files.forEach(function (file) {
    if (path.extname(file) === txt) {
      console.log(file);
    }
  });
});