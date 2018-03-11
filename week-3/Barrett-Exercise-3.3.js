var header = require('../header.js');

/*
 Title: Exercise-3.3
 Author: Richard Krasso
 Date: 3 07 2018
 Modified By: Mary Barrett
 Description: This code demonstrates the Singleton Pattern.


Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

console.log(header.display('Mary', 'Barrett', 'Exercise 3.3'));

console.log(" ");

var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }

    return {
        getInstance: function(){
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

//Create a new function and name it databaseSingletonTest()

function DatabaseSingletonTest()
{
    //Create two new database instances
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

//Call the console.log() function and output whether the two instances match

    console.log("Same database instance? %s", oracle === postgres);
}

//Call the databaseSingletonTest() function

DatabaseSingletonTest();

// end program