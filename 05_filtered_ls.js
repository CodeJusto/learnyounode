var fs = require('fs');
var dir = process.argv[2]
var type = process.argv[3]
var patt = new RegExp(`.${type}`)

fs.readdir(dir, function(err, data) {
  if (err) {
    console.log(err);
  }

  data.forEach(function(file) {
    if (patt.test(file)) {
      console.log(file);
    }
  });
  
});