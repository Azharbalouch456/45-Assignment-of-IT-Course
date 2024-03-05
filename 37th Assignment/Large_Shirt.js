"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size = `Large`, text = `I love typescript`) {
    console.log(`you ordered a ${size} that says ${text}`);
}
//makeShirt();
//makeShirt(`medium`);
// Different message
makeShirt(`small`, `i need small size of shirt`);
