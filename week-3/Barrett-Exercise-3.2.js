var header = require('../header.js');

/*
 Title: Exercise-3.2
 Author: Richard Krasso
 Date: 3 07 2018
 Modified By: Mary Barrett
 Description: This code demonstrates the Factory Pattern.

Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program

console.log(header.display('Mary', 'Barrett', 'Exercise 3.2'));

console.log(" ");

function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

//Create two (2) new Database classes, Oracle and Informix.

//The Oracle classes constructor will take one argument (properties array) and have four (4) properties, username, password, server, and version

function Oracle (properties) {
    this.username = properties.username || 'admin';
    this.password = properties.password || 'o-s3cret';
    this.server = properties.server || 'localhost:5454';
    this.version = properties.version || '10g'
}

//The Informix classes constructor will take one argument (properties array) and have three (3) properties, username, password, and server

function Informix (properties) {
    this.username = properties.username ||'admin';
    this.password = properties.password || 'o-s3cret';
    this.server = properties.server || 'localhost:3030';
}

//Update the createDatabase functions if…else block to handle the two newly created classes

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    
    if (properties.databaseType === 'MySql'){
        this.databaseClass = MySql;
    }
    
    if (properties.databaseType === 'Oracle'){
        this.databaseClass = Oracle;
    }

    if (properties.databaseType === 'Informix'){
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

//Create a new oracleFactory and call the createDatabase prototype function (supply your own default values)

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "admin",
    password: "admin"
});

//Create a new informixFactory and call the createDatabase prototype function (supply your own default values)

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "admin",
    password: "password"
});

//Output the results

console.log(oracle);
console.log(informix);



// end program


