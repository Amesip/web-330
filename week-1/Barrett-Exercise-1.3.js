var header = require('../header.js');

/*
 Title: Class Refresher
 Author: Richard Krasso
 Date: 2 22 2018
 Modified By: Mary Barrett
 Description: This code is a refresher from previous JS courses.

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

console.log(header.display('Mary', 'Barrett', 'Exercise 1.3'));

console.log(" ");

//Using functions, create a cell phone object with the following properties/methods: Manufacturer, Model, Color, Price, getPrice(), getModel(), getDetails()

function CellPhone(manufacturer, model, color, price)
{
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

//The getPrice() function will return the cell phones price.

    this.getPrice = function()
    {
        return this.price;
    }

//The getModel() function will return the cell phones model
    
    this.getModel = function()
    {
        return this.model;
    }

//The getDetails() function must call the getPrice() and getModel() functions and output the Manufacturer, Model, Color, and Price

    this.getDetails = function()
    {
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: " + this.getPrice()
    }
}

//Instantiate a new cell phone object (supply your own default values) and call the getDetails() function.

console.log("-- DISPLAYING CELL PHONE DETAILS --");

var iPhone = new CellPhone("Sony", "Awesome", "Silver", "700.00")
console.log(iPhone.getDetails());



// end program