/* 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/


let car : string = `subaru`;

// Test No .1
console.log("its car === `subaru`? i predict true");
console.log(car === `subaru`);

// Test No .2
console.log("its car ==`subaru`? i predict true");
console.log(car ==`subaru`);

// Test No .3

console.log("its car !=`Honda`? i predict true");
console.log(car != `Honda`);

// Test No .4

console.log("its car !==`Toyota`? i predict true");
console.log(car !== `Toyota`);

// Test No .5

console.log("its car. Upper Case ==`UBARSU`? i predict true");
console.log(car.toUpperCase() == `SUBARU`);

// Test No .6

console.log("its car. ==`SUBARU? i predict false");
console.log(car == `SUBARU`);

// Test No .7

console.log("its car. ===`SUBARU? i predict false");
console.log(car === `SUBARU`);

// Test No .8

console.log("its car. ===`Bus`? i predict false");
console.log(car === `Bus`);

// Test No .9

console.log("its car. ==`Train`? i predict false");
console.log(car == `Train`);

// Test No .10

console.log("its car. ==`Bike`? i predict false");
console.log(car == `Bike`);