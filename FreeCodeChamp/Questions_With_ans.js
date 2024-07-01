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



// Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}
// Only change code above this line
function addFive(){
  sum = sum + 5;
}
addThree();
addFive();


// `processArg` function ko `7` argument ke saath call karo 
// aur uske return value ko `processed` variable mein assign karo.

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
  
}
  processed = processArg(7)  // We assign in variable also function and object and more 

// Only change code below this line

processArg();

console.log(processed)  // output will be = 2 


// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove the first element of the array.

// The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  const removedElem =  arr.shift()
  return removedElem;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// Modify the welcomeToBooleans function so that it returns true instead of false.

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

// answer : 
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue){
  return "Yes, that was true";
}else{
  return "No, that was false";
}


  // Only change code above this line

}


//Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);


// The compareEquality function in the editor compares two values using the equality operator.
// Modify the function so that it returns the string Equal only when the values are strictly equal

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.

// Setup
function testNotEqual(val) {
  if (val !=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);



// Add the strict inequality operator to the if statement 
//so the function will return the string Not Equal when val is not strictly equal to 17


// Setup
function testStrictNotEqual(val) {
  if (val !==17)  { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);


// Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);


// Add the greater than or equal to operator to the indicated 
// lines so that the return statements make sense.

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);


//Add the less than operator to the indicated lines so that the return statements make sense.

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);


// Add the less than or equal to operator to the indicated lines so that the return statements make sense.

          function testLessOrEqual(val) {
            if (val <= 12) {  // Change this line
              return "Smaller Than or Equal to 12";
            }
          
            if (val <= 24) {  // Change this line
              return "Smaller Than or Equal to 24";
            }
          
            return "More Than 24";
          }
          
          testLessOrEqual(10);
          
 // Replace the two if statements with one statement, 
 //using the && operator, which will return the string Yes if val is less than 
 // or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.


 function testLogicalAnd(val) {
  // Only change code below this line

  if(val >=25 && val <=50)
    return "Yes";

  // if (val <= 50 ) {
  //   if (val >= 25) {
    
  //     return "Yes";
  //   }
  // }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);




// Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20,
// inclusive. Otherwise, return the string Inside.


function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15); // This will return "Inside"
testLogicalOr(5);  // This will return "Outside"
testLogicalOr(25); // This will return "Outside"


// Combine the if statements into a single if/else statement.

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

//Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20,
// inclusive. Otherwise, return the string Inside.\

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);


 // Combine the if statements into a single if/else statement.

 function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

console.log(testElse(5))   // The output wil be = 5 or Smaller


// Convert the logic to use else if statements.

function testElseIf(val) {
  if(val > 10 ){
    return "Greater than 10"
  }
  else if(val < 5) {
    return "Smaller than 5"
  }
  else{
    return "Between 5 and 10"
  }
  };


  // Convert the logic to use else if statements.


  function testElseIf(val) {
    if(val > 10 ){
      return "Greater than 10"
    }
    else if(val < 5) {
      return "Smaller than 5"
    }
    else{
      return "Between 5 and 10"
    }
    };
    
    console.log(testElseIf(100));  //The output will be = Greater than 10

    
    
 // Change the order of logic in the function so that it will,
 // return the correct statements in all cases.

 function orderMyLogic(val) {
  if (val < 10 && val > 5) {
    return "Less than 10";

  } else if (val < 5) {
    return "Less than 5";

  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(4);


// Write chained if/else if statements to fulfill the following conditions:
// num < 5 - return Tiny
// num < 10 - return Small
// num < 15 - return Medium
// num < 20 - return Large
// num >= 20 - return Huge

function testSize(num) {
  // Only change code below this line
  if(num < 5) {
    return 'Tiny';
  }else if(num < 10){
  return 'Small';
  }else if (num < 15){
  return 'Medium';
  } else if(num < 20) {
    return 'Large';
} else if(num >= 20) {
 return 'Huge';
}     
  return "Change Me";
  // Only change code above this line
}

testSize(9);


// Question :-
//Your function will be passed par and strokes arguments. 
//Return the correct string according to this table which lists the strokes in order of priority;
// top (highest) to bottom (lowest):

// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"
// par and strokes will always be numeric and positive. We have added an array 
// of all the names for your convenience.


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

  // Only change code below this line

if (strokes === 1){
return names[0];

} else if (strokes <= par - 2	){
 return names[1];

}else if(strokes === par - 1){
return names[2];

}else if (strokes === par) {
 return names[3];

} else if (strokes === par + 1	){
return names[4];

}  else if (strokes ===  par + 2) {
 return names[5];

} else if (strokes >= par + 3	) {
return names[6];
}
  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

// Create an if statement inside the function to return Yes, 
//that was true if the parameter wasThatTrue is true and return No, that was false otherwise.

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue) {
  return "Yes, that was true";

} return "No, that was false";


  // Only change code above this line

}

// Add the equality operator to the indicated line so that the function will return the 
//string Equal when val is equivalent to 12.

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
 wushanghq



 HTMLHRElement golfScore  golfScore  