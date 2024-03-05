"use strict";
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let Favourite_fruit = [`Apple`, `Banana`, `Peach`, `lemon`, `Carrot`, `Guava`];
if (Favourite_fruit.includes(`Apple`)) {
    console.log("Apple");
}
if (Favourite_fruit.includes(`Banana`)) {
    console.log("Banana");
}
if (Favourite_fruit.includes(`Peach`)) {
    console.log("Peach");
}
if (Favourite_fruit.includes(`lemon`)) {
    console.log(`you really like lemon`);
}
if (Favourite_fruit.includes(`Carrot`)) {
    console.log(`you really like carrot`);
}
if (Favourite_fruit.includes(`Guava`)) {
    console.log(`you really like Guava`);
}
