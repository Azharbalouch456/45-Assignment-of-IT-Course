"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let Guest = ["Zeeshan", "Rahman", "Zohaib", "Rahim"];
//for(let i=0; i<Guest.Length; i++){
//  console.log(`My dear.` + Guest[0] + `\n\t I want invite to you merriage cermony of my elder brother.\n\t`);
// }
let abs_Guest = "Zeeshan";
let N_Guest = "Waseem";
Guest[0] = N_Guest;
for (let i = 0; i < Guest.length; i++) {
    console.log(`My dear.` + Guest[i] + `\n\t I want invite to you merriage cermony of my elder brother.\n\t`);
}
console.log(`My dear. ${abs_Guest} is not coming in ,erriage cermony.`);
console.log(`Good news! we are making a big dinner table invite 3 more friends`);
Guest.unshift(`Azhar`);
Guest.splice(2, 0, `Waqar`);
Guest.push(`Zahid`);
for (let i = 0; i < Guest.length; i++) {
    console.log(`My dear.` + Guest[i] + `\n\t I want invite to you merriage cermony of my elder brother.\n\t`);
}
