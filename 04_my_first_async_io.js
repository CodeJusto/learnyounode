var fs = require('fs');
fs.readFile(process.argv[2], 'utf-8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  var length = data.split('\n').length
  if (length>0) {
    length -=1;
  }

  console.log(length)
})
