/*jshint esversion: 6*/

const fsystem = require('../filesystem')
const path = require("path")

class DBHandler  {
  normalizePath(fileName) {
    return  path.normalize(__dirname + "/../data/"+fileName+".json")
  }
  getMeters() {
    return fsystem.readFile(this.normalizePath("meters"))
  }
  getLogin () {
    return fsystem.readFile(this.normalizePath("login"))
  }
  getAccounts () {
    return fsystem.readFile(this.normalizePath("accounts"))
  }
};


module.exports = {
  DBHandler : new DBHandler()
}
