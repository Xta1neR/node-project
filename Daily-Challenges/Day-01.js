const prompt = require("prompt-sync")();

// Challenge 1: Create an Array "myFavSuperheroes" and add all your favourite superhero names as an array element (Please note, you should add atleast 5 names).
let myFavSuperheroes = ["Iron Man", "Captain America", "Hulk", "Thor", "Black Panther"];

// Challenge 2: Print (in console) the first superheroes name in your array "myFavSuperheroes".
console.log(myFavSuperheroes[0]);

// Challenge 3: Print (in console) the length of the array "myFavSuperheroes".
console.log(myFavSuperheroes.length);

// Challenge 4: Change the second last element in the Array "myFavSuperheroes" to your name and print the second last element in the array 
//"myFavSuperheroes".
myFavSuperheroes[-2] = "Rituraj";
console.log(myFavSuperheroes[-2]);

// Challenge 5: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the start without using the splice method.
let friend1 = "Friend1";
myFavSuperheroes = [friend1, ...myFavSuperheroes];
console.log(myFavSuperheroes);


// Challenge 6: Add your friend's name (friend 2) to the array "myFavSuperheroes" at the end without using the splice method.
let friend2 = "Friend2"
myFavSuperheroes = myFavSuperheroes.concat(friend2);
console.log(myFavSuperheroes);


// Challenge 7: Remove your friend's name (friend1) in the array "myFavSuperheroes" without using the splice method.
let friend1Index = myFavSuperheroes.indexOf("Friend1");
if (friend1Index !== -1) {
  myFavSuperheroes = myFavSuperheroes.slice(0, friend1Index).concat(myFavSuperheroes.slice(friend1Index + 1));
}
console.log(myFavSuperheroes);


// Challenge 8: Remove your friend's name (friend2) in the array "myFavSuperheroes" without using the splice method.
let friend2Index = myFavSuperheroes.indexOf("Friend2");
if (friend2Index !== -1) {
  myFavSuperheroes = myFavSuperheroes.slice(0, friend2Index).concat(myFavSuperheroes.slice(friend2Index + 1));
}
console.log(myFavSuperheroes);


// Challenge 9: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the 3rd position without removing any element using the splice method.
myFavSuperheroes.splice(2, 0, "Friend1");
console.log(myFavSuperheroes);


// Challenge 10: Remove the 4th and 5th element in the array "myFavSuperheroes", and add your friend's name (friend 2) at the 4th position using the splice method.
myFavSuperheroes.splice(3, 2, "Friend2");
console.log(myFavSuperheroes);


// Challenge 11: Create a nested array "superheroUniverse" and add 2 arrys to it, where first array should contain the name of the Marvel superheroes and second ararys should contain the name of the DC superhereoes.
let superheroUniverse = [
  ["Iron Man", "Captain America", "Hulk", "Thor", "Black Panther"],
  ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"]
];


// Challenge 12: Print one of the Marvel superhero name from the array "superheroUniverse".
console.log(superheroUniverse[0][0]);


// Challenge 13: Print one of the DC superhero name from the array "superheroUniverse".
console.log(superheroUniverse[1][1]);
