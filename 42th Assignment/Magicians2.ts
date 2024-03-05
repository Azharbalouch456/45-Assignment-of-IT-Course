// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name

function show_magicians(magicians: string[]): void {
    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
//const magician: string[] = ["azhar", "ali", "tameem"];
//show_magicians(magician)

function make_great (magicians: string[]):void {
    for (let i = 0; i < magicians.length; i++){
    magicians[i] = magicians[i]   + " the great"
    }

   }

const magicians2: string[] = ["azhar", "ali", "tameem"];
make_great(magicians2)
show_magicians(magicians2)