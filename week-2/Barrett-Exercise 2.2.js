var header = require('../header.js');

/*
 
 Title: Exercise 2.2
 Author: Richard Krasso
 Date: 2 26 2018
 Modified By: Mary Barrett
 Description: This code is a meant to demonstrate prototypes and the reuse of code.

 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

console.log(header.display('Mary', 'Barrett', 'Exercise 2.2'));

console.log(" ");

//Create an object literal Person with one function, getAge()

var person = 
{
    getAge: function ()
    {
        return this.age;
    }
};

//Create a new object literal, passing in the getAge() function

var robert = Object.create(person, {

    //From within the new object literal define an age and fullname function

    "age":
    {
        "value": "32"
    },
    "fullname":
    {
        "value": "Mary Barrett"
    }
});

robert.getAge();

//Call the console.log() function and output the Persons fullname

console.log("The person's full name is: '%s'", robert.fullname);

//Call the console.log() function and output the age (use the getAge() function)

console.log("The person's age is '%s'", robert.age);



// end program

