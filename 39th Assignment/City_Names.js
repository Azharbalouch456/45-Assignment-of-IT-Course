"use strict";
// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function City_Country(city, country) {
    return `${city}, ${country}`;
}
let pakistan = City_Country(`Pakistan`, `karachi`);
let india = City_Country(`india`, `Jaipur`);
let China = City_Country(`china`, `Beijing`);
console.log(pakistan);
console.log(india);
console.log(China);
