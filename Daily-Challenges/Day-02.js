const prompt = require("prompt-sync")();

// Challenge 1: Store the string "I am a" in one variable
// and store the other string "ur name"
// in other variable and concatenate both the
// string to get the output as "I am a ur name" using
// "+" operator.
let part1 = "I am a";
let part2 = "ur name";
let result = part1 + " " + part2;
console.log(result);

// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
let message = 'If you fail, never give up because FAIL means "First Attempt In Learning".';
console.log(message);

// Challenge 3: Store a string in a variable and display the length of the string.
let strLength = "This is a string";
console.log(strLength.length);

// Challenge 4: Store a string in a variable and convert it into uppercase.
let lowercaseString = "convert to uppercase";
let uppercaseString = lowercaseString.toUpperCase();
console.log(uppercaseString);

// Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
let originalString = "I love programming";
let replacedString = originalString.replace("programming", "JavaScript programming");
console.log(replacedString);

// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
let repeatString = "Print this string 3 times. ";
console.log(repeatString.repeat(3));

// Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
let strToArray = "I am a Kalvian";
let strArray = strToArray.split(" ");
console.log(strArray);

// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
let searchString = "Time and Tide wait for none";
let index = searchString.indexOf("Ti");
console.log(index);

// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
let searchWord = "When life gives you lemons make lemonade";
let includesWord = searchWord.includes("lemon");
console.log(includesWord);

// // Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
let longString = "You must be the change you wish to see in the world.";
let slicedWord = longString.slice(13, 19);
let substringWord = longString.substring(42, 47);
console.log(slicedWord);
console.log(substringWord);