var module1 = require('http');
var module2 = require('url');
var module3 = require('querystring');
var module4 = require('path');
var module5 = require('fs');
var module6 = require('util');

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



var varName = value;


//Defining a function
function display_Name(firstName, lastName) {
    alert("Hello " + firstName + " " + lastName);
}
   
//Invoking the function
display_Name("Kiki", "Garcia");


