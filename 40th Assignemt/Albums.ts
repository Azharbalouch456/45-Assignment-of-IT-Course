// 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_Album(artist: string, title: string):{artist: string, title: string} {
const dictionaries = {
artist: artist.charAt(0).toUpperCase() + artist.slice(1),
title: title.charAt(0).toUpperCase() + title.slice(1)
};
return dictionaries
}
let Album = make_Album("Azhar", "Light")
console.log(Album)

Album = make_Album("Arjit", "red waves")
console.log(Album)

Album = make_Album("Atif Aslam", "seenbreez")
console.log(Album)
