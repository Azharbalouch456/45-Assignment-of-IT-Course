"use strict";
// 31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
let users = [`Admin`, `Azhar`, `Ali`, `Balouch`];
/*if (users.length === 0){
console.log("we need some users")
}else{
    for (let user of users){
if( user === "Admin"){
console.log("Hello Admin, would you like to see status report?")
}else{
    console.log(`Hello ${users}, thanks for loging in again`)
}
    }
}
*/
users = [];
if (users.length === 0) {
    console.log("we need  find some users!");
}
