/*jshint esversion: 6*/

const fs = require('fs')

readFile = function(fileName){
  var fileContents = fs.readFileSync(fileName, 'utf8', (err,data) => {
    if(err) throw err;
    return data;
  })
  return fileContents;
};

module.exports = {
  readFile: readFile
}
