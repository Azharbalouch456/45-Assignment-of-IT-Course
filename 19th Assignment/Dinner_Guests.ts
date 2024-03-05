// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


let Guest: string[] = ["Zeeshan", "Rahman", "Zohaib", "Rahim"];

//for(let i=0; i<Guest.Length; i++){
    
   //  console.log(`My dear.` + Guest[0] + `\n\t I want invite to you merriage cermony of my elder brother.\n\t`);
// }

let abs_Guest: string = "Zeeshan";

let N_Guest: string ="Waseem";

Guest[0] = N_Guest;

// for(let i=0; i<Guest.length; i++){

// console.log(`My dear.` + Guest[i] + `\n\t I want invite to you merriage cermony of my elder brother.\n\t`);
//  }

// console.log(`My dear. ${abs_Guest} is not coming in dinner.`);

//console.log(`Good news! we are making a big dinner table invite 3 more friends`);

Guest.unshift(`Azhar`);
Guest.splice(2, 0 ,`Waqar`);
Guest.push(`Zahid`);
 
// for(let i=0; i<Guest.length; i++){

// console.log(`My dear.` + Guest[i] + `\n\t I want invite you in dinner.\n\t`);
  //  }
    
    while(Guest.length > 2){
    let remove_Guest = Guest.pop();
    // console.log(`So Sorry. ${remove_Guest} we cant invite you in dinner`);
     // }
     // for(let i=0; i<Guest.length; i++){

       // console.log(`My dear.` + Guest[i] + `\n\t you are still invited in dinner.\n\t`);
        }
        Guest.splice(0, 2);
        console.log(Guest);

        console.log(`Total Dinner invited Guests: ${Guest.length}`);
