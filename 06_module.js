var fs = require('fs');

const reducer = (acc, item) => {
  if(patt.test(item))
  {
    acc.push(item)
  }
  return acc;
};

module.exports = function (dir, filter, callback) {
  var patt = new RegExp(`\.${filter}`);
  fs.readdir(dir, function(err, data) {
    if (err) {
      return callback(err);
    }
    return callback(null, data.reduce(reducer, []));
  });
}