"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
const personName = "azhar";
//LowerCase
console.log(personName.toLowerCase());
// UpperCase
console.log(personName.toUpperCase());
//titleCase
let firstLetter = personName.charAt(0).toUpperCase();
let restLetter = personName.slice(1).toLowerCase();
let titleCase = firstLetter + restLetter;
console.log(titleCase);
