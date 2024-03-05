// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


// write a program that creates object containing these items.
let person_Name: string = "Azhar";

const personName_Array : string [] = ["Person", "Bike", "Tameem"];
// Data types of person
interface person {
age:26
name: string;
nationality: string;
Student: boolean;
}
// person objects
let person :person = {
age: 26 ,
name: `Azhar`,
nationality: `pakistan`,
Student: true,
}
// print person objects
console.log(person);
// Data types of Bike
interface Bike{
Model :number
company: string;
color: string;
}
// Bike objects
let Bike = {
model: `2024`,
company: `Honda`,
color: `white`,
}
// print bike objects
console.log(Bike);