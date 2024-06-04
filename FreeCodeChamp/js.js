// Use the .length property to set lastNameLength to the number of characters in lastName.

// Setup
let lastNameLength = 0;
// uncomment before use this const  lastName = "Lovelace"; 

// Only change code below this line
console.log(lastName.length)
lastNameLength = lastName.length
console.log(lastNameLength)

// Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

console.log(lastName[0]);  //for my understanig 

// Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line


/* Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

Hint: Try looking at the example above if you get stuck.*/

// Setup
const lastName1 = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName1[2]; // Change this line

console.log(thirdLetterOfLastName); // output will be v


/* Use bracket notation to find the last character in the lastName variable.*/

// Setup
const lastName0 = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName0.length - 1]; // Change this line

console.log(lastLetterOfLastName);   // the output will be =  e
console.log(lastName);                // the output will be = Lovelace


// Use bracket notation to find the second-to-last character in the lastName string.


// Setup
const lastName3 = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName3.length - 2]; // Change this line

console.log(secondToLastLetterOfLastName); // the output will be = c


/*  You will need to use the string concatenation operator + to build a new string,
using the provided variables: myNoun, myAdjective, myVerb, and myAdverb.
You will then assign the formed string to the wordBlanks variable.
You should not change the words assigned to the variables.*/

// You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
// Only change code above this line



/*  Modify the new array myArray so that it contains both a string and a number (in that order).

*/

// Only change code below this line
const myArray = ["aalu", 23,"chana", "apple",45];
console.log(myArray)


// Create a nested array called myArray.

// Only change code below this line
const myArray1 = [["Apple",43], ["Juse",92]];
console.log(myArray1);

//Create a variable called myData and set it to equal the first value of myArray using bracket notation.

const myArrayA = [50, 60, 70];
const myData = myArrayA[0]

console.log(myData);  //The output will be =  50 

 // Using bracket notation select an element from myArray such that myData is equal to 8.

 const myArray0 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData0 = myArray0[2][1];
  console.log(myData0) // output will be = 8

// Push ["dog", 3] onto the end of the myArray variable.


  // Setup
const myArray4 = [["John", 23], ["cat", 2]];

// Only change code below this line

myArray4.push(["dog",3]);
console.log(myArray4);

// Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

// Setup
const myArray6 = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray6.pop()

console.log(myArray) // the output will be = [ [ 'John', 23 ] ]

console.log(removedFromMyArray) // the output will be = [ [ 'John', 23 ] ] [ 'cat', 2 ]



// Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

// Setup
const myArray12 = [["John", 23], ["dog", 3]];

// Only change code below this line
 const removedFromMyArray1 = myArray12.shift();

console.log(myArray); // output will be = [ [ 'dog', 3 ] ]


// Add ["Paul", 35] to the beginning of the myArray variable using unshift().

// Setup
const myArray9 = [["John", 23], ["dog", 3]];

myArray.shift();  // removing the frist array of the variable

// Only change code below this line

myArray9.unshift(["Paul", 35]);

console.log(myArray9); // the output will be = [ [ 'Paul', 35 ], [ 'dog', 3 ] ]

/* 
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

["Chocolate Bar", 15]
There should be at least 5 sub-arrays in the list.

*/

const myList = [ [ "Apple",20],
    ["amnan",30],
    ["Yesh",404],
    ["Tree",345],
    ["Juse",34]
];

console.log(myList); // the output will be = [ [ 'Apple', 20 ],
 // [ 'amnan', 30 ],
 // [ 'Yesh', 404 ],
 // [ 'Tree', 345 ],
 // [ 'Juse', 34 ] ]


/* 
1. Create a function called reusableFunction which prints the string Hi World to the dev console.
2. Call the function. */

function reusableFunction(){
  console.log("Hi World");

};

reusableFunction()   // output will be = Hi World


 /* Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.*/
    
function functionWithArgs(num1,num2){
  console.log(num1 + num2)
};
// let num1 = 20;
// let num2 = 40;

functionWithArgs(10 ,20);  // the output will be = 40
 

// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

function timesFive(num0){
  return num0 * 5;
  
  }
  const ans = timesFive(3)
  
  console.log(ans); // the output will be =  15



// Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

// Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.

// Declare the myGlobal variable below this line
let myGlobal =  10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}
// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


/* 
The editor has two console.logs to help you see what is happening. 
Check the console as you code to see how it changes. 
Declare a local variable myVar inside myLocalScope and run the tests.
*/

/*  Note: The console will still display ReferenceError: myVar is not defined, 
but this will not cause the tests to fail.*/


function myLocalScope() {
  // Only change code below this line
  let myVar;
  

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


// Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";

  // Only change code above this line
  return outerWear;

}
myOutfit();
