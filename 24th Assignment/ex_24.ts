// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array




// equality and unequality
 let myName: string = "Azhar";

console.log(myName == "Azhar"); // true
 console.log(myName !== "Azhar"); // false

// mumberics
 let number: number = 10;

console.log(number == 10); // true
console.log(number !== 6); //true
console.log(number > 5);  //true
console.log(number < 5);  //false
console.log(number >= 5); //true
console.log(number <= 5); // false


// and && === || (pipe)
 let Numb1: number = 8;
let Numb2: number = 6;

console.log(Numb1 > 7 && Numb2 < 5);  // result will come false
           // true       // false

console.log(Numb1 > 7 || Numb2 < 5);  // result will come true becaue (or) means if one option is true then result will show (true).
           // true       // false */

let myArray = [ 2, 3, "Azhar"];
let mystring = "Aftab"

console.log(Array.isArray(myArray)); // true
console.log(Array.isArray(mystring)); // false