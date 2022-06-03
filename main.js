/*-------------------
BASIC DATA STRUCTURES
---------------------

Data can be stored and accessed in many ways. You already know some common JavaScript data structures — arrays and objects.

In this Basic Data Structures course, you'll learn more about the differences between arrays and objects, 
and which to use in different situations. You'll also learn how to use helpful JS methods like splice() and Object.keys() 
to access and manipulate data.*/

/*----------------------------------------
Use an Array to Store a Collection of Data
------------------------------------------

The below is an example of the simplest implementation of an array data structure. This is known as a one-dimensional array, 
meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains booleans, strings, 
and numbers, among other valid JavaScript data types:

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
The console.log call displays 7.

All arrays have a length property, which as shown above, can be very easily accessed with the syntax Array.length. 
A more complex implementation of an array can be seen below. This is known as a multi-dimensional array, or an array 
that contains other arrays. Notice that this array also contains JavaScript objects, which we will examine very closely 
in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects. */

let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];

/* We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5 elements 
in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean. */

let yourArray = ["HI", 15, 20, "Rock and roll", true, false]; // Change this line



