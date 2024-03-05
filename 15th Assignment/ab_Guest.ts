// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


let Guest: string[] = ["Zeeshan", "Rahman", "Zohaib", "Rahim"];

console.log(`My dear.` + Guest[0] + `\n\t I want invite to you in merriage cermony of my eleder brother.\n\t`);
console.log(`My dear.` + Guest[0] + `\n\t I want invite to you in merriage cermony of my eleder brother.\n\t`);
console.log(`My dear.` + Guest[0] + `\n\t I want invite to you in merriage cermony of my eleder brother.\n\t`);
console.log(`My dear.` + Guest[0] + `\n\t I want invite to you in merriage cermony of my elder brother.\n\t`);

let abs_Guest: string = "Zeeshan";

let N_Guest: string ="Waseem";

Guest[0] = N_Guest;

console.log(`My dear.` + Guest[0] + `\n\t I want invite to you merriage cermony of my elder brother.\n\t`);

console.log(`My dear. ${abs_Guest} is not coming in merriage cermony.`);