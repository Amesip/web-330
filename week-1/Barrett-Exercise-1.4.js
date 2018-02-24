var header = require('../header.js');

/*
 Title: Duck Typing
 Author: Richard Krasso
 Date: 2 22 2018
 Modified By: Mary Barrett
 Description: This code is intended to demonstrate JS Interfaces and Duck Typing.

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

console.log(header.display('Mary', 'Barrett', 'Exercise 1.4'));

console.log(" ");

//Create a function constructor Car class with one parameter (model) Add a prototype method to each class called “start” which should output “ added to the racetrack!”

function Car(model)
{
    this.model = model;
}
Car.prototype.start = function()
{
    console.log("Car added to the racetrack!");
}

//Create a function constructor Truck class with two parameters (model, year) Add a prototype method to each class called “start” which should output “ added to the racetrack!”

function Truck(model, year)
{
    this.model = model;
    this.year = year;
}
Truck.prototype.start = function()
{
    console.log("Truck added to the racetrack!");
}

//Create a function constructor Jeep class with three parameters (model, year, color) Add a prototype method to each class called “start” which should output “ added to the racetrack!”

function Jeep(model, year, color)
{
    this.model = model;
    this.year = year;
    this.color = color;
}
Jeep.prototype.start = function()
{
    console.log("Jeep added to the racetrack!");
}

//Define an empty racetrack array

var racetrack = [];

//Create a driveIt function with one parameter (vehicle) From within the driveIt function call the “start” function on the vehicle

function driveIt(vehicle)
{
    vehicle.start();

    racetrack.push(vehicle);
}

//Create three (3) vehicle classes and pass them through the driveIt() function

var carClass = new Car("Focus");
var truckClass = new Truck("1500", "2017");
var jeepClass = new Jeep("Cherokee", "2018", "Green");

console.log("");

driveIt(carClass);
driveIt(truckClass);
driveIt(jeepClass);

//Iterate over the racetrack array and output the results

console.log('\n-- The following vehicles have been added to the racetrack --');
for (var i = 0; i < racetrack.length; i++)
{
    console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
}


// end program