var mymodule = require('./06_module.js')

// console.log()

mymodule(process.argv[2], process.argv[3], function(err, data) {
  if (err) {
    console.log(err);
  }

  data.forEach(function(file) {
    console.log(file);
  })
});