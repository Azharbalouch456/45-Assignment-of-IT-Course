"use strict";
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let Guest = ["Zeeshan", "Rahman", "Zohaib", "Rahim"];
//for(let i=0; i<Guest.Length; i++){
//  console.log(`My dear.` + Guest[0] + `\n\t I want invite to you merriage cermony of my elder brother.\n\t`);
// }
let abs_Guest = "Zeeshan";
let N_Guest = "Waseem";
Guest[0] = N_Guest;
// for(let i=0; i<Guest.length; i++){
// console.log(`My dear.` + Guest[i] + `\n\t I want invite to you merriage cermony of my elder brother.\n\t`);
//  }
console.log(`My dear. ${abs_Guest} is not coming in dinner.`);
console.log(`Good news! we are making a big dinner table invite 3 more friends`);
Guest.unshift(`Azhar`);
Guest.splice(2, 0, `Waqar`);
Guest.push(`Zahid`);
for (let i = 0; i < Guest.length; i++) {
    console.log(`My dear.` + Guest[i] + `\n\t I want invite you in dinner.\n\t`);
}
while (Guest.length > 2) {
    let remove_Guest = Guest.pop();
    console.log(`So Sorry. ${remove_Guest} we cant invite you in dinner`);
}
for (let i = 0; i < Guest.length; i++) {
    console.log(`My dear.` + Guest[i] + `\n\t you are still invited in dinner.\n\t`);
}
Guest.splice(0, 2);
console.log(Guest);
