var module1 = require('http');
var module2 = require('url');
var module3 = require('querystring');
var module4 = require('path');
var module5 = require('fs');
var module6 = require('util');
//--------------------------------------------------------------------------------------
var detail = {
    name: function (name) {
      console.log('Name: ' + name);
    },
    domain:function (domain) {
      console.log('Domain: ' + domain);
    }
};
   
module.exports = detail;

var myLogModule = require('./Local_module.js');

myLogModule.name('Edureka');
myLogModule.domain('Education');

//--------------------------------------------------------------------------------------

var varName = value;

//--------------------------------------------------------------------------------------

//Defining a function
function display_Name(firstName, lastName) {
    alert("Hello " + firstName + " " + lastName);
}
   
//Invoking the function
display_Name("Kiki", "Garcia");

//--------------------------------------------------------------------------------------

// object with properties and method
var employee = {
    //properties
    firstName: "Minho",
    lastName: "Choi",
    age: 35,
    salary:50000,
    //method
    getFullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  };

//--------------------------------------------------------------------------------------

//ALREADY REQUIRED
// var http = require('http');
// var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('script.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);

//--------------------------------------------------------------------------------------


